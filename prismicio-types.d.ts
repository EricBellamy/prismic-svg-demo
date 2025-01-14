// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Item in *Settings → Feature SVGs*
 */
export interface SettingsDocumentDataFeatureSvgsItem {
  /**
   * SVG Image field in *Settings → Feature SVGs*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.feature_svgs[].svg_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  svg_image: prismic.ImageField<never>;

  /**
   * SVG Stroke Width field in *Settings → Feature SVGs*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.feature_svgs[].svg_stroke_width
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  svg_stroke_width: prismic.NumberField;

  /**
   * SVG Color field in *Settings → Feature SVGs*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.feature_svgs[].svg_color
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  svg_color: prismic.ColorField;

  /**
   * SVG Background field in *Settings → Feature SVGs*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.feature_svgs[].svg_background
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  svg_background: prismic.ColorField;
}

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
  /**
   * Site Title field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.site_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  site_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.meta_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * OG Image field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.og_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  og_image: prismic.ImageField<never>;

  /**
   * Feature SVGs field in *Settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.feature_svgs[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  feature_svgs: prismic.GroupField<
    Simplify<SettingsDocumentDataFeatureSvgsItem>
  >;

  /**
   * SVG Link field in *Settings*
   *
   * - **Field Type**: Link to Media
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.svg_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  svg_link: prismic.LinkToMediaField;

  /**
   * SVG Embed field in *Settings*
   *
   * - **Field Type**: Embed
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.svg_embed
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#embed
   */
  svg_embed: prismic.EmbedField;

  /**
   * SVG Image field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.svg_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  svg_image: prismic.ImageField<never>;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;

export type AllDocumentTypes = SettingsDocument;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      SettingsDocument,
      SettingsDocumentData,
      SettingsDocumentDataFeatureSvgsItem,
      AllDocumentTypes,
    };
  }
}
