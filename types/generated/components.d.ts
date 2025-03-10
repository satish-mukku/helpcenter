import type { Schema, Attribute } from '@strapi/strapi';

export interface ArticleArticleImageCard extends Schema.Component {
  collectionName: 'components_article_article_image_cards';
  info: {
    displayName: 'Article Image Card';
    description: '';
  };
  attributes: {
    article: Attribute.Relation<
      'article.article-image-card',
      'oneToOne',
      'api::article.article'
    >;
  };
}

export interface ArticleArticleSectionTitle extends Schema.Component {
  collectionName: 'components_article_article_section_titles';
  info: {
    displayName: 'Article Section Title';
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    url: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    icon: Attribute.Media &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface ArticleContentSection extends Schema.Component {
  collectionName: 'components_article_content_sections';
  info: {
    displayName: 'Content Section';
  };
  attributes: {
    message: Attribute.Component<'shared.contextual-message', true>;
    image: Attribute.Component<'shared.image', true>;
    video: Attribute.Component<'shared.video', true>;
    title: Attribute.Component<'shared.title', true>;
    table: Attribute.Component<'shared.table-cell', true>;
  };
}

export interface ArticleFeedback extends Schema.Component {
  collectionName: 'components_article_feedbacks';
  info: {
    displayName: 'Feedback';
  };
  attributes: {
    icon: Attribute.Media;
  };
}

export interface ArticleRelatedArticles extends Schema.Component {
  collectionName: 'components_article_related_articles';
  info: {
    displayName: 'Related Articles';
  };
  attributes: {
    articles: Attribute.Relation<
      'article.related-articles',
      'oneToMany',
      'api::article.article'
    >;
  };
}

export interface CategoryCategoryAccordion extends Schema.Component {
  collectionName: 'components_category_category_accordions';
  info: {
    displayName: 'Category Accordion';
  };
  attributes: {
    category: Attribute.Relation<
      'category.category-accordion',
      'oneToOne',
      'api::category.category'
    >;
  };
}

export interface CategoryCategoryGroupDropdown extends Schema.Component {
  collectionName: 'components_category_category_group_dropdowns';
  info: {
    displayName: 'Category Group Dropdown';
  };
  attributes: {
    category_groups: Attribute.Relation<
      'category.category-group-dropdown',
      'oneToMany',
      'api::category-group.category-group'
    >;
  };
}

export interface CategoryCategoryGroupSelector extends Schema.Component {
  collectionName: 'components_category_category_group_selectors';
  info: {
    displayName: 'Category Group Selector';
  };
  attributes: {
    category_groups: Attribute.Relation<
      'category.category-group-selector',
      'oneToMany',
      'api::category-group.category-group'
    >;
  };
}

export interface CategoryImageCardCarousel extends Schema.Component {
  collectionName: 'components_category_image_card_carousels';
  info: {
    displayName: 'Image Card Carousel';
  };
  attributes: {
    carousel_item: Attribute.Component<'article.article-image-card', true>;
    category: Attribute.Relation<
      'category.image-card-carousel',
      'oneToOne',
      'api::category.category'
    >;
  };
}

export interface SharedAccordionItem extends Schema.Component {
  collectionName: 'components_shared_accordion_items';
  info: {
    displayName: 'Accordion Item';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.Blocks;
    url: Attribute.String & Attribute.DefaultTo<'#'>;
  };
}

export interface SharedAccordion extends Schema.Component {
  collectionName: 'components_shared_accordions';
  info: {
    displayName: 'Accordion';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    accordionData: Attribute.Component<'shared.accordion-item', true>;
  };
}

export interface SharedArticleSectionTitle extends Schema.Component {
  collectionName: 'components_shared_article_section_titles';
  info: {
    displayName: 'Article Section Title';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
  };
}

export interface SharedBanner extends Schema.Component {
  collectionName: 'components_shared_banners';
  info: {
    displayName: 'Banner';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    description: Attribute.String;
    url: Attribute.String;
  };
}

export interface SharedCarrousel extends Schema.Component {
  collectionName: 'components_shared_carrousels';
  info: {
    displayName: 'Carrousel';
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    images: Attribute.Media &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    short_description: Attribute.Blocks &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface SharedContactUs extends Schema.Component {
  collectionName: 'components_shared_contact_uses';
  info: {
    displayName: 'Contact Us';
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    icon: Attribute.Media &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    subtitle: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    url: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface SharedContentBody extends Schema.Component {
  collectionName: 'components_shared_content_bodies';
  info: {
    displayName: 'Content Body';
    description: '';
  };
  attributes: {
    icon: Attribute.Media & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    category: Attribute.Relation<
      'shared.content-body',
      'oneToOne',
      'api::category.category'
    >;
    display_component: Attribute.Enumeration<['card_carousel', 'list']>;
    section_size: Attribute.Enumeration<['full', 'half']>;
    max_display_items: Attribute.Integer;
    topics: Attribute.Boolean;
  };
}

export interface SharedContextualMessage extends Schema.Component {
  collectionName: 'components_shared_contextual_messages';
  info: {
    displayName: 'Contextual Message';
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    message: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    state: Attribute.Enumeration<['Danger', 'Warning', 'Neutral', 'Positive']> &
      Attribute.Required &
      Attribute.DefaultTo<'Neutral'>;
  };
}

export interface SharedDropdown extends Schema.Component {
  collectionName: 'components_shared_dropdowns';
  info: {
    displayName: 'dropdown';
  };
  attributes: {
    tilte: Attribute.String;
  };
}

export interface SharedFooterLink extends Schema.Component {
  collectionName: 'components_shared_footer_links';
  info: {
    displayName: 'Footer Link';
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    label: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    url: Attribute.String & Attribute.Required;
  };
}

export interface SharedFooterSection extends Schema.Component {
  collectionName: 'components_shared_footer_sections';
  info: {
    displayName: 'Footer Section';
    description: '';
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    label: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    footer_links: Attribute.Component<'shared.footer-link', true>;
    copyright: Attribute.Blocks;
    max_colums: Attribute.Integer;
  };
}

export interface SharedHeader extends Schema.Component {
  collectionName: 'components_shared_headers';
  info: {
    displayName: 'Header';
    description: '';
  };
  attributes: {
    logo: Attribute.Component<'shared.logo'>;
    mobile_logo: Attribute.Component<'shared.mobile-logo'>;
    user_login: Attribute.Component<'shared.login-button'>;
    language_selector: Attribute.Component<'shared.language-selector'>;
    pill: Attribute.Component<'shared.pill', true>;
    search_bar: Attribute.Component<'shared.search-bar'>;
  };
}

export interface SharedImage extends Schema.Component {
  collectionName: 'components_shared_images';
  info: {
    displayName: 'Image';
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    image: Attribute.Media & Attribute.Required;
  };
}

export interface SharedLabel extends Schema.Component {
  collectionName: 'components_shared_labels';
  info: {
    displayName: 'Label';
  };
  attributes: {
    label: Attribute.String;
  };
}

export interface SharedLanguageSelector extends Schema.Component {
  collectionName: 'components_shared_language_selectors';
  info: {
    displayName: 'Language Selector';
    description: '';
  };
  attributes: {
    languages: Attribute.Relation<
      'shared.language-selector',
      'oneToMany',
      'api::language.language'
    >;
  };
}

export interface SharedLink extends Schema.Component {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    label: Attribute.String;
    url: Attribute.String;
    linkIcon: Attribute.String & Attribute.DefaultTo<'north_east'>;
    displayIcon: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface SharedLoginButton extends Schema.Component {
  collectionName: 'components_shared_login_buttons';
  info: {
    displayName: 'Login Button';
    description: '';
  };
  attributes: {
    token_variable: Attribute.String;
    login_url: Attribute.String;
  };
}

export interface SharedLogo extends Schema.Component {
  collectionName: 'components_shared_logos';
  info: {
    displayName: 'Logo';
  };
  attributes: {
    logo: Attribute.Media & Attribute.Required;
  };
}

export interface SharedMobileLogo extends Schema.Component {
  collectionName: 'components_shared_mobile_logos';
  info: {
    displayName: 'Mobile Logo';
  };
  attributes: {
    mobile_logo: Attribute.Media;
  };
}

export interface SharedModal extends Schema.Component {
  collectionName: 'components_shared_modals';
  info: {
    displayName: 'Modal';
    description: '';
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    subtitle: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    content: Attribute.Blocks &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    icon: Attribute.Media;
    primaryButton: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Ok'>;
    secondaryButton: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Cancel'>;
  };
}

export interface SharedPill extends Schema.Component {
  collectionName: 'components_shared_pills';
  info: {
    displayName: 'Pill';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
  };
}

export interface SharedProductCard extends Schema.Component {
  collectionName: 'components_shared_product_cards';
  info: {
    displayName: 'Product Card';
  };
  attributes: {
    image: Attribute.Media;
    title: Attribute.String;
    text: Attribute.String;
  };
}

export interface SharedRichText extends Schema.Component {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich Text';
  };
  attributes: {
    content: Attribute.Blocks;
  };
}

export interface SharedSearchBar extends Schema.Component {
  collectionName: 'components_shared_search_bars';
  info: {
    displayName: 'Search Bar';
    description: '';
  };
  attributes: {
    topics: Attribute.Relation<
      'shared.search-bar',
      'oneToMany',
      'api::topic.topic'
    >;
    search_api: Attribute.String;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
    shareImage: Attribute.Media;
  };
}

export interface SharedSidebarSection extends Schema.Component {
  collectionName: 'components_shared_sidebar_sections';
  info: {
    displayName: 'Sidebar Section';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    categories: Attribute.Relation<
      'shared.sidebar-section',
      'oneToMany',
      'api::category.category'
    >;
    group_by_product: Attribute.Boolean & Attribute.DefaultTo<false>;
    group_by_topics: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface SharedSidebar extends Schema.Component {
  collectionName: 'components_shared_sidebars';
  info: {
    displayName: 'Sidebar';
    description: '';
  };
  attributes: {
    category_selector: Attribute.Component<'category.category-group-dropdown'>;
    sidebar_sections: Attribute.Component<'shared.sidebar-section', true>;
  };
}

export interface SharedSubtitle extends Schema.Component {
  collectionName: 'components_shared_subtitles';
  info: {
    displayName: 'Subtitle';
  };
  attributes: {
    subtitle: Attribute.String;
  };
}

export interface SharedTableCell extends Schema.Component {
  collectionName: 'components_shared_table_cells';
  info: {
    displayName: 'Table Cell';
    description: '';
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    label: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    order: Attribute.Integer;
  };
}

export interface SharedTableRow extends Schema.Component {
  collectionName: 'components_shared_table_rows';
  info: {
    displayName: 'Table Row';
    description: '';
  };
  attributes: {
    header: Attribute.Boolean;
    cells: Attribute.Component<'shared.table-cell', true>;
    style: Attribute.String;
  };
}

export interface SharedTable extends Schema.Component {
  collectionName: 'components_shared_tables';
  info: {
    displayName: 'Table';
  };
  attributes: {
    rows: Attribute.Component<'shared.table-row', true>;
  };
}

export interface SharedTitle extends Schema.Component {
  collectionName: 'components_shared_titles';
  info: {
    displayName: 'Title';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface SharedVideo extends Schema.Component {
  collectionName: 'components_shared_videos';
  info: {
    displayName: 'Video';
    description: '';
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    video: Attribute.Media &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'article.article-image-card': ArticleArticleImageCard;
      'article.article-section-title': ArticleArticleSectionTitle;
      'article.content-section': ArticleContentSection;
      'article.feedback': ArticleFeedback;
      'article.related-articles': ArticleRelatedArticles;
      'category.category-accordion': CategoryCategoryAccordion;
      'category.category-group-dropdown': CategoryCategoryGroupDropdown;
      'category.category-group-selector': CategoryCategoryGroupSelector;
      'category.image-card-carousel': CategoryImageCardCarousel;
      'shared.accordion-item': SharedAccordionItem;
      'shared.accordion': SharedAccordion;
      'shared.article-section-title': SharedArticleSectionTitle;
      'shared.banner': SharedBanner;
      'shared.carrousel': SharedCarrousel;
      'shared.contact-us': SharedContactUs;
      'shared.content-body': SharedContentBody;
      'shared.contextual-message': SharedContextualMessage;
      'shared.dropdown': SharedDropdown;
      'shared.footer-link': SharedFooterLink;
      'shared.footer-section': SharedFooterSection;
      'shared.header': SharedHeader;
      'shared.image': SharedImage;
      'shared.label': SharedLabel;
      'shared.language-selector': SharedLanguageSelector;
      'shared.link': SharedLink;
      'shared.login-button': SharedLoginButton;
      'shared.logo': SharedLogo;
      'shared.mobile-logo': SharedMobileLogo;
      'shared.modal': SharedModal;
      'shared.pill': SharedPill;
      'shared.product-card': SharedProductCard;
      'shared.rich-text': SharedRichText;
      'shared.search-bar': SharedSearchBar;
      'shared.seo': SharedSeo;
      'shared.sidebar-section': SharedSidebarSection;
      'shared.sidebar': SharedSidebar;
      'shared.subtitle': SharedSubtitle;
      'shared.table-cell': SharedTableCell;
      'shared.table-row': SharedTableRow;
      'shared.table': SharedTable;
      'shared.title': SharedTitle;
      'shared.video': SharedVideo;
    }
  }
}
