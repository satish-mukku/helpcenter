const { Client } = require('@elastic/elasticsearch');
const qs = require('qs');

let client = null;

module.exports = (plugin) => {

    client = new Client({
        node: plugin.config.searchConnector.host,
        auth: {
          username: plugin.config.searchConnector.username,
          password: plugin.config.searchConnector.password
        },
        tls: {
          ca: plugin.config.searchConnector.certificate,
          rejectUnauthorized: false
        }
    });

    plugin.controllers['performSearch'].enhancedSearch = async (ctx) => {
        try {
            const params = qs.parse(ctx.request.query);
            const query = params.search || '';
            const pagesize = params.pagesize || 10;
            const from = params.from || 0;

            // Construct the query using the value of query
            const result = await client.search({
                index: plugin.config.indexAliasName,
                query: {
                    bool: {
                        should: [
                            {
                                match: {
                                    title: query // Search for matches in the title field
                                }
                            },
                            {
                              match: {
                                subtitle: query // Search for matches in the subtitle field
                              }
                            },
                            {
                                match: {
                                    short_description: query // Search for matches in the short_description field.
                                }
                            }
                        ]
                    }
                },
                size: pagesize,
                from: from
            });

            // Map results and format the id field
            const mappedResults = result.hits.hits.map((hit) => {
                const formattedId = hit._id.split('::').pop(); // Extract the last part after '::'
                return {
                    id: formattedId, // Use the formatted id
                    ...hit._source, 
                };
            });

            return mappedResults;
        } catch (err) {
            console.log('Search : elasticClient.enhancedSearch : Error encountered while making a search request to ElasticSearch.');
            throw err;
        }
    };

    plugin.routes['search'].routes.push({
        method: 'GET',
        path: '/enhanced-search',
        handler: 'performSearch.enhancedSearch',
    });
    
    return plugin;
};
