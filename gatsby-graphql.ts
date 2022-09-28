export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  jsxRuntime?: Maybe<Scalars['String']>;
  trailingSlash?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
};

export type SiteFunction = Node & {
  functionRoute: Scalars['String'];
  pluginName: Scalars['String'];
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
  absoluteCompiledFilePath: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  pageContext?: Maybe<Scalars['JSON']>;
  pluginCreator?: Maybe<SitePlugin>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePlugin = Node & {
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<Scalars['JSON']>;
  packageJson?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SiteBuildMetadata = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type GatsbyImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type GatsbyImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type GatsbyImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type ImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type ImageFit =
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type ImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type ImageCropFocus =
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: InputMaybe<Scalars['Int']>;
};

export type PotraceTurnPolicy =
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type Potrace = {
  turnPolicy?: InputMaybe<PotraceTurnPolicy>;
  turdSize?: InputMaybe<Scalars['Float']>;
  alphaMax?: InputMaybe<Scalars['Float']>;
  optCurve?: InputMaybe<Scalars['Boolean']>;
  optTolerance?: InputMaybe<Scalars['Float']>;
  threshold?: InputMaybe<Scalars['Int']>;
  blackOnWhite?: InputMaybe<Scalars['Boolean']>;
  color?: InputMaybe<Scalars['String']>;
  background?: InputMaybe<Scalars['String']>;
};

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  fluid?: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['JSON'];
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  traceSVG?: InputMaybe<Potrace>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: InputMaybe<Scalars['Int']>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  duotone?: InputMaybe<DuotoneGradient>;
  traceSVG?: InputMaybe<Potrace>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
  sizes?: InputMaybe<Scalars['String']>;
  srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};


export type ImageSharpGatsbyImageDataArgs = {
  layout?: InputMaybe<ImageLayout>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  placeholder?: InputMaybe<ImagePlaceholder>;
  blurredOptions?: InputMaybe<BlurredOptions>;
  tracedSVGOptions?: InputMaybe<Potrace>;
  formats?: InputMaybe<Array<InputMaybe<ImageFormat>>>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sizes?: InputMaybe<Scalars['String']>;
  quality?: InputMaybe<Scalars['Int']>;
  jpgOptions?: InputMaybe<JpgOptions>;
  pngOptions?: InputMaybe<PngOptions>;
  webpOptions?: InputMaybe<WebPOptions>;
  avifOptions?: InputMaybe<AvifOptions>;
  transformOptions?: InputMaybe<TransformOptions>;
  backgroundColor?: InputMaybe<Scalars['String']>;
};


export type ImageSharpResizeArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionLevel?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  base64?: InputMaybe<Scalars['Boolean']>;
  traceSVG?: InputMaybe<Potrace>;
  toFormat?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: InputMaybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: InputMaybe<ImageFormat>;
};

export type JpgOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  progressive?: InputMaybe<Scalars['Boolean']>;
};

export type PngOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  compressionSpeed?: InputMaybe<Scalars['Int']>;
};

export type WebPOptions = {
  quality?: InputMaybe<Scalars['Int']>;
};

export type AvifOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  lossless?: InputMaybe<Scalars['Boolean']>;
  speed?: InputMaybe<Scalars['Int']>;
};

export type TransformOptions = {
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type WpNode = {
  /** The globally unique ID for the object */
  id: Scalars['ID'];
};

export type WpContentNode = {
  /** Connection between the ContentNode type and the ContentType type */
  contentType?: Maybe<WpContentNodeToContentTypeConnectionEdge>;
  /** The name of the Content Type the node belongs to */
  contentTypeName: Scalars['String'];
  /** The ID of the node in the database. */
  databaseId: Scalars['Int'];
  /** Post publishing date. */
  date?: Maybe<Scalars['Date']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['Date']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  guid?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  modified?: Maybe<Scalars['Date']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  modifiedGmt?: Maybe<Scalars['Date']>;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  slug?: Maybe<Scalars['String']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']>;
  /** The template assigned to a node of content */
  template?: Maybe<WpContentTemplate>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type WpContentNodeDateArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type WpContentNodeDateGmtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type WpContentNodeModifiedArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type WpContentNodeModifiedGmtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type WpUniformResourceIdentifiable = {
  /** The unique resource identifier path */
  id: Scalars['ID'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};

/** Connection between the ContentNode type and the ContentType type */
export type WpContentNodeToContentTypeConnectionEdge = {
  /** The node of the connection, without the edges */
  node?: Maybe<WpContentType>;
};

/** An Post Type object */
export type WpContentType = Node & WpNode & WpUniformResourceIdentifiable & {
  /** The url path of the first page of the archive page for this content type. */
  archivePath?: Maybe<Scalars['String']>;
  /** Whether this content type should can be exported. */
  canExport?: Maybe<Scalars['Boolean']>;
  /** Connection between the ContentType type and the Taxonomy type */
  connectedTaxonomies?: Maybe<WpContentTypeToTaxonomyConnection>;
  /** Connection between the ContentType type and the ContentNode type */
  contentNodes?: Maybe<WpContentTypeToContentNodeConnection>;
  /** Whether content of this type should be deleted when the author of it is deleted from the system. */
  deleteWithUser?: Maybe<Scalars['Boolean']>;
  /** Description of the content type. */
  description?: Maybe<Scalars['String']>;
  /** Whether to exclude nodes of this content type from front end search results. */
  excludeFromSearch?: Maybe<Scalars['Boolean']>;
  /** The plural name of the content type within the GraphQL Schema. */
  graphqlPluralName?: Maybe<Scalars['String']>;
  /** The singular name of the content type within the GraphQL Schema. */
  graphqlSingleName?: Maybe<Scalars['String']>;
  /** Whether this content type should have archives. Content archives are generated by type and by date. */
  hasArchive?: Maybe<Scalars['Boolean']>;
  /** Whether the content type is hierarchical, for example pages. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether this page is set to the static front page. */
  isFrontPage: Scalars['Boolean'];
  /** Whether this page is set to the blog posts page. */
  isPostsPage: Scalars['Boolean'];
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** Display name of the content type. */
  label?: Maybe<Scalars['String']>;
  /** Details about the content type labels. */
  labels?: Maybe<WpPostTypeLabelDetails>;
  /** The name of the icon file to display as a menu icon. */
  menuIcon?: Maybe<Scalars['String']>;
  /** The position of this post type in the menu. Only applies if show_in_menu is true. */
  menuPosition?: Maybe<Scalars['Int']>;
  /** The internal name of the post type. This should not be used for display purposes. */
  name?: Maybe<Scalars['String']>;
  /** Whether a content type is intended for use publicly either via the admin interface or by front-end users. While the default settings of exclude_from_search, publicly_queryable, show_ui, and show_in_nav_menus are inherited from public, each does not rely on this relationship and controls a very specific intention. */
  public?: Maybe<Scalars['Boolean']>;
  /** Whether queries can be performed on the front end for the content type as part of parse_request(). */
  publiclyQueryable?: Maybe<Scalars['Boolean']>;
  /** Name of content type to display in REST API &quot;wp/v2&quot; namespace. */
  restBase?: Maybe<Scalars['String']>;
  /** The REST Controller class assigned to handling this content type. */
  restControllerClass?: Maybe<Scalars['String']>;
  /** Makes this content type available via the admin bar. */
  showInAdminBar?: Maybe<Scalars['Boolean']>;
  /** Whether to add the content type to the GraphQL Schema. */
  showInGraphql?: Maybe<Scalars['Boolean']>;
  /** Where to show the content type in the admin menu. To work, $show_ui must be true. If true, the post type is shown in its own top level menu. If false, no menu is shown. If a string of an existing top level menu (eg. &quot;tools.php&quot; or &quot;edit.php?post_type=page&quot;), the post type will be placed as a sub-menu of that. */
  showInMenu?: Maybe<Scalars['Boolean']>;
  /** Makes this content type available for selection in navigation menus. */
  showInNavMenus?: Maybe<Scalars['Boolean']>;
  /** Whether the content type is associated with a route under the the REST API &quot;wp/v2&quot; namespace. */
  showInRest?: Maybe<Scalars['Boolean']>;
  /** Whether to generate and allow a UI for managing this content type in the admin. */
  showUi?: Maybe<Scalars['Boolean']>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

/** Connection between the ContentType type and the Taxonomy type */
export type WpContentTypeToTaxonomyConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpTaxonomy>>>;
};

/** A taxonomy object */
export type WpTaxonomy = Node & WpNode & {
  /** The url path of the first page of the archive page for this content type. */
  archivePath?: Maybe<Scalars['String']>;
  /** List of Content Types associated with the Taxonomy */
  connectedContentTypes?: Maybe<WpTaxonomyToContentTypeConnection>;
  /** Description of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;description */
  description?: Maybe<Scalars['String']>;
  /** The plural name of the post type within the GraphQL Schema. */
  graphqlPluralName?: Maybe<Scalars['String']>;
  /** The singular name of the post type within the GraphQL Schema. */
  graphqlSingleName?: Maybe<Scalars['String']>;
  /** Whether the taxonomy is hierarchical */
  hierarchical?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  /** Name of the taxonomy shown in the menu. Usually plural. */
  label?: Maybe<Scalars['String']>;
  /** The display name of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;label */
  name?: Maybe<Scalars['String']>;
  /** Whether the taxonomy is publicly queryable */
  public?: Maybe<Scalars['Boolean']>;
  /** Name of content type to diplay in REST API &quot;wp/v2&quot; namespace. */
  restBase?: Maybe<Scalars['String']>;
  /** The REST Controller class assigned to handling this content type. */
  restControllerClass?: Maybe<Scalars['String']>;
  /** Whether to show the taxonomy as part of a tag cloud widget. This field is equivalent to WP_Taxonomy-&gt;show_tagcloud */
  showCloud?: Maybe<Scalars['Boolean']>;
  /** Whether to display a column for the taxonomy on its post type listing screens. */
  showInAdminColumn?: Maybe<Scalars['Boolean']>;
  /** Whether to add the post type to the GraphQL Schema. */
  showInGraphql?: Maybe<Scalars['Boolean']>;
  /** Whether to show the taxonomy in the admin menu */
  showInMenu?: Maybe<Scalars['Boolean']>;
  /** Whether the taxonomy is available for selection in navigation menus. */
  showInNavMenus?: Maybe<Scalars['Boolean']>;
  /** Whether to show the taxonomy in the quick/bulk edit panel. */
  showInQuickEdit?: Maybe<Scalars['Boolean']>;
  /** Whether to add the post type route in the REST API &quot;wp/v2&quot; namespace. */
  showInRest?: Maybe<Scalars['Boolean']>;
  /** Whether to generate and allow a UI for managing terms in this taxonomy in the admin */
  showUi?: Maybe<Scalars['Boolean']>;
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

/** Connection between the Taxonomy type and the ContentType type */
export type WpTaxonomyToContentTypeConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpContentType>>>;
};

/** Connection between the ContentType type and the ContentNode type */
export type WpContentTypeToContentNodeConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpContentNode>>>;
};

/** Details for labels of the PostType */
export type WpPostTypeLabelDetails = {
  /** Default is ‘Add New’ for both hierarchical and non-hierarchical types. */
  addNew?: Maybe<Scalars['String']>;
  /** Label for adding a new singular item. */
  addNewItem?: Maybe<Scalars['String']>;
  /** Label to signify all items in a submenu link. */
  allItems?: Maybe<Scalars['String']>;
  /** Label for archives in nav menus */
  archives?: Maybe<Scalars['String']>;
  /** Label for the attributes meta box. */
  attributes?: Maybe<Scalars['String']>;
  /** Label for editing a singular item. */
  editItem?: Maybe<Scalars['String']>;
  /** Label for the Featured Image meta box title. */
  featuredImage?: Maybe<Scalars['String']>;
  /** Label for the table views hidden heading. */
  filterItemsList?: Maybe<Scalars['String']>;
  /** Label for the media frame button. */
  insertIntoItem?: Maybe<Scalars['String']>;
  /** Label for the table hidden heading. */
  itemsList?: Maybe<Scalars['String']>;
  /** Label for the table pagination hidden heading. */
  itemsListNavigation?: Maybe<Scalars['String']>;
  /** Label for the menu name. */
  menuName?: Maybe<Scalars['String']>;
  /** General name for the post type, usually plural. */
  name?: Maybe<Scalars['String']>;
  /** Label for the new item page title. */
  newItem?: Maybe<Scalars['String']>;
  /** Label used when no items are found. */
  notFound?: Maybe<Scalars['String']>;
  /** Label used when no items are in the trash. */
  notFoundInTrash?: Maybe<Scalars['String']>;
  /** Label used to prefix parents of hierarchical items. */
  parentItemColon?: Maybe<Scalars['String']>;
  /** Label for removing the featured image. */
  removeFeaturedImage?: Maybe<Scalars['String']>;
  /** Label for searching plural items. */
  searchItems?: Maybe<Scalars['String']>;
  /** Label for setting the featured image. */
  setFeaturedImage?: Maybe<Scalars['String']>;
  /** Name for one object of this post type. */
  singularName?: Maybe<Scalars['String']>;
  /** Label for the media frame filter. */
  uploadedToThisItem?: Maybe<Scalars['String']>;
  /** Label in the media frame for using a featured image. */
  useFeaturedImage?: Maybe<Scalars['String']>;
  /** Label for viewing a singular item. */
  viewItem?: Maybe<Scalars['String']>;
  /** Label for viewing post type archives. */
  viewItems?: Maybe<Scalars['String']>;
};

/** Connection between the ContentNode type and the User type */
export type WpContentNodeToEditLockConnectionEdge = {
  /** The timestamp for when the node was last edited */
  lockTimestamp?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node?: Maybe<WpUser>;
};

/** A User object */
export type WpUser = Node & WpNode & WpUniformResourceIdentifiable & WpCommenter & WpDatabaseIdentifier & {
  /** Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument. */
  avatar?: Maybe<WpAvatar>;
  /** User metadata option name. Usually it will be &quot;wp_capabilities&quot;. */
  capKey?: Maybe<Scalars['String']>;
  /** A list of capabilities (permissions) granted to the user */
  capabilities?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Connection between the User type and the Comment type */
  comments?: Maybe<WpUserToCommentConnection>;
  /** Identifies the primary key from the database. */
  databaseId: Scalars['Int'];
  /** Description of the user. */
  description?: Maybe<Scalars['String']>;
  /** Email address of the user. This is equivalent to the WP_User-&gt;user_email property. */
  email?: Maybe<Scalars['String']>;
  /** A complete list of capabilities including capabilities inherited from a role. This is equivalent to the array keys of WP_User-&gt;allcaps. */
  extraCapabilities?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** First name of the user. This is equivalent to the WP_User-&gt;user_first_name property. */
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** Last name of the user. This is equivalent to the WP_User-&gt;user_last_name property. */
  lastName?: Maybe<Scalars['String']>;
  /** The preferred language locale set for the user. Value derived from get_user_locale(). */
  locale?: Maybe<Scalars['String']>;
  /** Display name of the user. This is equivalent to the WP_User-&gt;dispaly_name property. */
  name?: Maybe<Scalars['String']>;
  /** The nicename for the user. This field is equivalent to WP_User-&gt;user_nicename */
  nicename?: Maybe<Scalars['String']>;
  /** Nickname of the user. */
  nickname?: Maybe<Scalars['String']>;
  /** Connection between the User type and the page type */
  pages?: Maybe<WpUserToPageConnection>;
  /** Connection between the User type and the post type */
  posts?: Maybe<WpUserToPostConnection>;
  /** The date the user registered or was created. The field follows a full ISO8601 date string format. */
  registeredDate?: Maybe<Scalars['String']>;
  /** Connection between the User type and the UserRole type */
  roles?: Maybe<WpUserToUserRoleConnection>;
  /** The slug for the user. This field is equivalent to WP_User-&gt;user_nicename */
  slug?: Maybe<Scalars['String']>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
  /** A website url that is associated with the user. */
  url?: Maybe<Scalars['String']>;
  /** Username for the user. This field is equivalent to WP_User-&gt;user_login. */
  username?: Maybe<Scalars['String']>;
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type WpCommenter = {
  /** Identifies the primary key from the database. */
  databaseId: Scalars['Int'];
  /** The email address of the author of a comment. */
  email?: Maybe<Scalars['String']>;
  /** The globally unique identifier for the comment author. */
  id: Scalars['ID'];
  /** The name of the author of a comment. */
  name?: Maybe<Scalars['String']>;
  /** The url of the author of a comment. */
  url?: Maybe<Scalars['String']>;
};

export type WpDatabaseIdentifier = {
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
};

/** Avatars are profile images for users. WordPress by default uses the Gravatar service to host and fetch avatars from. */
export type WpAvatar = {
  /** URL for the default image or a default type. Accepts &#039;404&#039; (return a 404 instead of a default image), &#039;retro&#039; (8bit), &#039;monsterid&#039; (monster), &#039;wavatar&#039; (cartoon face), &#039;indenticon&#039; (the &#039;quilt&#039;), &#039;mystery&#039;, &#039;mm&#039;, or &#039;mysteryman&#039; (The Oyster Man), &#039;blank&#039; (transparent GIF), or &#039;gravatar_default&#039; (the Gravatar logo). */
  default?: Maybe<Scalars['String']>;
  /** HTML attributes to insert in the IMG element. Is not sanitized. */
  extraAttr?: Maybe<Scalars['String']>;
  /** Whether to always show the default image, never the Gravatar. */
  forceDefault?: Maybe<Scalars['Boolean']>;
  /** Whether the avatar was successfully found. */
  foundAvatar?: Maybe<Scalars['Boolean']>;
  /** Height of the avatar image. */
  height?: Maybe<Scalars['Int']>;
  /** What rating to display avatars up to. Accepts &#039;G&#039;, &#039;PG&#039;, &#039;R&#039;, &#039;X&#039;, and are judged in that order. */
  rating?: Maybe<Scalars['String']>;
  /** Type of url scheme to use. Typically HTTP vs. HTTPS. */
  scheme?: Maybe<Scalars['String']>;
  /** The size of the avatar in pixels. A value of 96 will match a 96px x 96px gravatar image. */
  size?: Maybe<Scalars['Int']>;
  /** URL for the gravatar image source. */
  url?: Maybe<Scalars['String']>;
  /** Width of the avatar image. */
  width?: Maybe<Scalars['Int']>;
};

/** Connection between the User type and the Comment type */
export type WpUserToCommentConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpComment>>>;
};

/** A Comment object */
export type WpComment = Node & WpNode & WpDatabaseIdentifier & {
  /** User agent used to post the comment. This field is equivalent to WP_Comment-&gt;comment_agent and the value matching the &quot;comment_agent&quot; column in SQL. */
  agent?: Maybe<Scalars['String']>;
  /** The approval status of the comment. This field is equivalent to WP_Comment-&gt;comment_approved and the value matching the &quot;comment_approved&quot; column in SQL. */
  approved?: Maybe<Scalars['Boolean']>;
  /** The author of the comment */
  author?: Maybe<WpCommentToCommenterConnectionEdge>;
  /** IP address for the author. This field is equivalent to WP_Comment-&gt;comment_author_IP and the value matching the &quot;comment_author_IP&quot; column in SQL. */
  authorIp?: Maybe<Scalars['String']>;
  /** Connection between the Comment type and the ContentNode type */
  commentedOn?: Maybe<WpCommentToContentNodeConnectionEdge>;
  /** Content of the comment. This field is equivalent to WP_Comment-&gt;comment_content and the value matching the &quot;comment_content&quot; column in SQL. */
  content?: Maybe<Scalars['String']>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** Date the comment was posted in local time. This field is equivalent to WP_Comment-&gt;date and the value matching the &quot;date&quot; column in SQL. */
  date?: Maybe<Scalars['Date']>;
  /** Date the comment was posted in GMT. This field is equivalent to WP_Comment-&gt;date_gmt and the value matching the &quot;date_gmt&quot; column in SQL. */
  dateGmt?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  /** Karma value for the comment. This field is equivalent to WP_Comment-&gt;comment_karma and the value matching the &quot;comment_karma&quot; column in SQL. */
  karma?: Maybe<Scalars['Int']>;
  /** Connection between the Comment type and the Comment type */
  wpParent?: Maybe<WpCommentToParentCommentConnectionEdge>;
  /** The database id of the parent comment node or null if it is the root comment */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent comment node. */
  parentId?: Maybe<Scalars['ID']>;
  /** Connection between the Comment type and the Comment type */
  replies?: Maybe<WpCommentToCommentConnection>;
  /** Type of comment. This field is equivalent to WP_Comment-&gt;comment_type and the value matching the &quot;comment_type&quot; column in SQL. */
  type?: Maybe<Scalars['String']>;
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


/** A Comment object */
export type WpCommentDateArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** A Comment object */
export type WpCommentDateGmtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

/** Connection between the Comment type and the Commenter type */
export type WpCommentToCommenterConnectionEdge = {
  /** The node of the connection, without the edges */
  node?: Maybe<WpCommenter>;
};

/** Connection between the Comment type and the ContentNode type */
export type WpCommentToContentNodeConnectionEdge = {
  /** The node of the connection, without the edges */
  node?: Maybe<WpContentNode>;
};

/** Connection between the Comment type and the Comment type */
export type WpCommentToParentCommentConnectionEdge = {
  /** The node of the connection, without the edges */
  node?: Maybe<WpComment>;
};

/** Connection between the Comment type and the Comment type */
export type WpCommentToCommentConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpComment>>>;
};

/** The mediaItem type */
export type WpMediaItem = Node & WpNode & WpContentNode & WpUniformResourceIdentifiable & WpDatabaseIdentifier & WpNodeWithTemplate & WpNodeWithTitle & WpNodeWithAuthor & WpNodeWithComments & WpHierarchicalContentNode & RemoteFile & {
  /** Alternative text to display when resource is not displayed */
  altText?: Maybe<Scalars['String']>;
  /** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  ancestors?: Maybe<WpHierarchicalContentNodeToContentNodeAncestorsConnection>;
  /** Connection between the NodeWithAuthor type and the User type */
  author?: Maybe<WpNodeWithAuthorToUserConnectionEdge>;
  /** The database identifier of the author of the node */
  authorDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the author of the node */
  authorId?: Maybe<Scalars['ID']>;
  /** The caption for the resource */
  caption?: Maybe<Scalars['String']>;
  /** Connection between the HierarchicalContentNode type and the ContentNode type */
  wpChildren?: Maybe<WpHierarchicalContentNodeToContentNodeChildrenConnection>;
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  commentCount?: Maybe<Scalars['Int']>;
  /** Whether the comments are open or closed for this particular post. */
  commentStatus?: Maybe<Scalars['String']>;
  /** Connection between the mediaItem type and the Comment type */
  comments?: Maybe<WpMediaItemToCommentConnection>;
  /** Connection between the ContentNode type and the ContentType type */
  contentType?: Maybe<WpContentNodeToContentTypeConnectionEdge>;
  /** The name of the Content Type the node belongs to */
  contentTypeName: Scalars['String'];
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** Post publishing date. */
  date?: Maybe<Scalars['Date']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['Date']>;
  /** Description of the image (stored as post_content) */
  description?: Maybe<Scalars['String']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  /** The filesize in bytes of the resource */
  fileSize?: Maybe<Scalars['Int']>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  guid?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /** Details about the mediaItem */
  mediaDetails?: Maybe<WpMediaDetails>;
  /** Url of the mediaItem */
  mediaItemUrl?: Maybe<Scalars['String']>;
  /** Type of resource */
  mediaType?: Maybe<Scalars['String']>;
  mimeType: Scalars['String'];
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  modified?: Maybe<Scalars['Date']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  modifiedGmt?: Maybe<Scalars['Date']>;
  /** The parent of the node. The parent object can be of various types */
  wpParent?: Maybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdge>;
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']>;
  /** The sizes attribute value for an image. */
  sizes?: Maybe<Scalars['String']>;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  slug?: Maybe<Scalars['String']>;
  /** Url of the mediaItem */
  sourceUrl?: Maybe<Scalars['String']>;
  /** The srcset attribute specifies the URL of the image to use in different situations. It is a comma separated string of urls and their widths. */
  srcSet?: Maybe<Scalars['String']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']>;
  /** The template assigned to the node */
  template?: Maybe<WpContentTemplate>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<Scalars['String']>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
  nodeType?: Maybe<Scalars['String']>;
  /** @deprecated MediaItem.remoteFile was renamed to localFile */
  remoteFile?: Maybe<File>;
  localFile?: Maybe<File>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  filename: Scalars['String'];
  filesize?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  publicUrl: Scalars['String'];
  resize?: Maybe<RemoteFileResize>;
  /** Data used in the <GatsbyImage /> component. See https://gatsby.dev/img for more info. */
  gatsbyImage?: Maybe<Scalars['JSON']>;
};


/** The mediaItem type */
export type WpMediaItemDateArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** The mediaItem type */
export type WpMediaItemDateGmtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** The mediaItem type */
export type WpMediaItemModifiedArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** The mediaItem type */
export type WpMediaItemModifiedGmtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** The mediaItem type */
export type WpMediaItemResizeArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  fit?: InputMaybe<RemoteFileFit>;
  format?: InputMaybe<RemoteFileFormat>;
  cropFocus?: InputMaybe<Array<InputMaybe<RemoteFileCropFocus>>>;
  quality?: InputMaybe<Scalars['Int']>;
};


/** The mediaItem type */
export type WpMediaItemGatsbyImageArgs = {
  layout?: InputMaybe<RemoteFileLayout>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  placeholder?: InputMaybe<RemoteFilePlaceholder>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  formats?: InputMaybe<Array<RemoteFileFormat>>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sizes?: InputMaybe<Scalars['String']>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  fit?: InputMaybe<RemoteFileFit>;
  cropFocus?: InputMaybe<Array<InputMaybe<RemoteFileCropFocus>>>;
  quality?: InputMaybe<Scalars['Int']>;
};

export type WpNodeWithTemplate = {
  /** The template assigned to the node */
  template?: Maybe<WpContentTemplate>;
};

export type WpNodeWithTitle = {
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<Scalars['String']>;
};

export type WpNodeWithAuthor = {
  /** Connection between the NodeWithAuthor type and the User type */
  author?: Maybe<WpNodeWithAuthorToUserConnectionEdge>;
  /** The database identifier of the author of the node */
  authorDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the author of the node */
  authorId?: Maybe<Scalars['ID']>;
};

export type WpNodeWithComments = {
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  commentCount?: Maybe<Scalars['Int']>;
  /** Whether the comments are open or closed for this particular post. */
  commentStatus?: Maybe<Scalars['String']>;
};

export type WpHierarchicalContentNode = {
  /** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  ancestors?: Maybe<WpHierarchicalContentNodeToContentNodeAncestorsConnection>;
  /** Connection between the HierarchicalContentNode type and the ContentNode type */
  wpChildren?: Maybe<WpHierarchicalContentNodeToContentNodeChildrenConnection>;
  /** The parent of the node. The parent object can be of various types */
  wpParent?: Maybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdge>;
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']>;
};

/** Remote Interface */
export type RemoteFile = {
  id: Scalars['ID'];
  mimeType: Scalars['String'];
  filename: Scalars['String'];
  filesize?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  publicUrl: Scalars['String'];
  resize?: Maybe<RemoteFileResize>;
  /** Data used in the <GatsbyImage /> component. See https://gatsby.dev/img for more info. */
  gatsbyImage?: Maybe<Scalars['JSON']>;
};


/** Remote Interface */
export type RemoteFileResizeArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  fit?: InputMaybe<RemoteFileFit>;
  format?: InputMaybe<RemoteFileFormat>;
  cropFocus?: InputMaybe<Array<InputMaybe<RemoteFileCropFocus>>>;
  quality?: InputMaybe<Scalars['Int']>;
};


/** Remote Interface */
export type RemoteFileGatsbyImageArgs = {
  layout?: InputMaybe<RemoteFileLayout>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  placeholder?: InputMaybe<RemoteFilePlaceholder>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  formats?: InputMaybe<Array<RemoteFileFormat>>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sizes?: InputMaybe<Scalars['String']>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  fit?: InputMaybe<RemoteFileFit>;
  cropFocus?: InputMaybe<Array<InputMaybe<RemoteFileCropFocus>>>;
  quality?: InputMaybe<Scalars['Int']>;
};

export type RemoteFileResize = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  src?: Maybe<Scalars['String']>;
};

export type RemoteFileFit =
  | 'COVER'
  | 'FILL'
  | 'OUTSIDE'
  | 'CONTAIN';

export type RemoteFileFormat =
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type RemoteFileCropFocus =
  | 'CENTER'
  | 'TOP'
  | 'RIGHT'
  | 'BOTTOM'
  | 'LEFT'
  | 'ENTROPY'
  | 'EDGES'
  | 'FACES';

export type RemoteFileLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type RemoteFilePlaceholder =
  | 'DOMINANT_COLOR'
  | 'BLURRED'
  | 'NONE';

export type WpContentTemplate = {
  /** The name of the template */
  templateName?: Maybe<Scalars['String']>;
};

/** Connection between the NodeWithAuthor type and the User type */
export type WpNodeWithAuthorToUserConnectionEdge = {
  /** The node of the connection, without the edges */
  node?: Maybe<WpUser>;
};

/** Connection between the HierarchicalContentNode type and the ContentNode type */
export type WpHierarchicalContentNodeToContentNodeAncestorsConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpContentNode>>>;
};

/** Connection between the HierarchicalContentNode type and the ContentNode type */
export type WpHierarchicalContentNodeToContentNodeChildrenConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpContentNode>>>;
};

/** Connection between the HierarchicalContentNode type and the ContentNode type */
export type WpHierarchicalContentNodeToParentContentNodeConnectionEdge = {
  /** The node of the connection, without the edges */
  node?: Maybe<WpContentNode>;
};

/** Connection between the mediaItem type and the Comment type */
export type WpMediaItemToCommentConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpComment>>>;
};

/** Connection between the ContentNode type and the User type */
export type WpContentNodeToEditLastConnectionEdge = {
  /** The node of the connection, without the edges */
  node?: Maybe<WpUser>;
};

/** File details for a Media Item */
export type WpMediaDetails = {
  /** The filename of the mediaItem */
  file?: Maybe<Scalars['String']>;
  /** The height of the mediaItem */
  height?: Maybe<Scalars['Int']>;
  /** Meta information associated with the mediaItem */
  meta?: Maybe<WpMediaItemMeta>;
  /** The available sizes of the mediaItem */
  sizes?: Maybe<Array<Maybe<WpMediaSize>>>;
  /** The width of the mediaItem */
  width?: Maybe<Scalars['Int']>;
};

/** Meta connected to a MediaItem */
export type WpMediaItemMeta = {
  /** Aperture measurement of the media item. */
  aperture?: Maybe<Scalars['Float']>;
  /** Information about the camera used to create the media item. */
  camera?: Maybe<Scalars['String']>;
  /** The text string description associated with the media item. */
  caption?: Maybe<Scalars['String']>;
  /** Copyright information associated with the media item. */
  copyright?: Maybe<Scalars['String']>;
  /** The date/time when the media was created. */
  createdTimestamp?: Maybe<Scalars['Int']>;
  /** The original creator of the media item. */
  credit?: Maybe<Scalars['String']>;
  /** The focal length value of the media item. */
  focalLength?: Maybe<Scalars['Float']>;
  /** The ISO (International Organization for Standardization) value of the media item. */
  iso?: Maybe<Scalars['Int']>;
  /** List of keywords used to describe or identfy the media item. */
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The vertical or horizontal aspect of the media item. */
  orientation?: Maybe<Scalars['String']>;
  /** The shutter speed information of the media item. */
  shutterSpeed?: Maybe<Scalars['Float']>;
  /** A useful title for the media item. */
  title?: Maybe<Scalars['String']>;
};

/** Details of an available size for a media item */
export type WpMediaSize = {
  /** The filename of the referenced size */
  file?: Maybe<Scalars['String']>;
  /** The filesize of the resource */
  fileSize?: Maybe<Scalars['Int']>;
  /** The height of the referenced size */
  height?: Maybe<Scalars['String']>;
  /** The mime type of the referenced size */
  mimeType?: Maybe<Scalars['String']>;
  /** The referenced size name */
  name?: Maybe<Scalars['String']>;
  /** The url of the referenced size */
  sourceUrl?: Maybe<Scalars['String']>;
  /** The width of the referenced size */
  width?: Maybe<Scalars['String']>;
};

/** Connection between the User type and the page type */
export type WpUserToPageConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpPage>>>;
};

/** The page type */
export type WpPage = Node & WpNode & WpContentNode & WpUniformResourceIdentifiable & WpDatabaseIdentifier & WpNodeWithTemplate & WpNodeWithTitle & WpNodeWithContentEditor & WpNodeWithAuthor & WpNodeWithFeaturedImage & WpNodeWithComments & WpNodeWithRevisions & WpNodeWithPageAttributes & WpHierarchicalContentNode & WpMenuItemLinkable & {
  /** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  ancestors?: Maybe<WpHierarchicalContentNodeToContentNodeAncestorsConnection>;
  /** Connection between the NodeWithAuthor type and the User type */
  author?: Maybe<WpNodeWithAuthorToUserConnectionEdge>;
  /** The database identifier of the author of the node */
  authorDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the author of the node */
  authorId?: Maybe<Scalars['ID']>;
  /** Connection between the HierarchicalContentNode type and the ContentNode type */
  wpChildren?: Maybe<WpHierarchicalContentNodeToContentNodeChildrenConnection>;
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  commentCount?: Maybe<Scalars['Int']>;
  /** Whether the comments are open or closed for this particular post. */
  commentStatus?: Maybe<Scalars['String']>;
  /** Connection between the page type and the Comment type */
  comments?: Maybe<WpPageToCommentConnection>;
  /** The content of the post. */
  content?: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the ContentType type */
  contentType?: Maybe<WpContentNodeToContentTypeConnectionEdge>;
  /** The name of the Content Type the node belongs to */
  contentTypeName: Scalars['String'];
  /** The unique resource identifier path */
  databaseId: Scalars['Int'];
  /** Post publishing date. */
  date?: Maybe<Scalars['Date']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['Date']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
  featuredImage?: Maybe<WpNodeWithFeaturedImageToMediaItemConnectionEdge>;
  /** The database identifier for the featured image node assigned to the content node */
  featuredImageDatabaseId?: Maybe<Scalars['Int']>;
  /** Globally unique ID of the featured image assigned to the node */
  featuredImageId?: Maybe<Scalars['ID']>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  guid?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether this page is set to the static front page. */
  isFrontPage: Scalars['Boolean'];
  /** Whether this page is set to the blog posts page. */
  isPostsPage: Scalars['Boolean'];
  /** Whether this page is set to the privacy page. */
  isPrivacyPage: Scalars['Boolean'];
  /** True if the node is a revision of another node */
  isRevision?: Maybe<Scalars['Boolean']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** Polylang language */
  language?: Maybe<WpLanguage>;
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: Maybe<Scalars['Int']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  modified?: Maybe<Scalars['Date']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  modifiedGmt?: Maybe<Scalars['Date']>;
  /** The parent of the node. The parent object can be of various types */
  wpParent?: Maybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdge>;
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']>;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  slug?: Maybe<Scalars['String']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']>;
  /** The template assigned to a node of content */
  template?: Maybe<WpContentTemplate>;
  /** Connection between the page type and the TermNode type */
  terms?: Maybe<WpPageToTermNodeConnection>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<Scalars['String']>;
  /** List all translated versions of this post */
  translations?: Maybe<Array<Maybe<WpPage>>>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


/** The page type */
export type WpPageDateArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** The page type */
export type WpPageDateGmtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** The page type */
export type WpPageModifiedArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** The page type */
export type WpPageModifiedGmtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type WpNodeWithContentEditor = {
  /** The content of the post. */
  content?: Maybe<Scalars['String']>;
};

export type WpNodeWithFeaturedImage = {
  /** Connection between the ContentNode type and the ContentType type */
  contentType?: Maybe<WpContentNodeToContentTypeConnectionEdge>;
  /** The name of the Content Type the node belongs to */
  contentTypeName: Scalars['String'];
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** Post publishing date. */
  date?: Maybe<Scalars['Date']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['Date']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
  featuredImage?: Maybe<WpNodeWithFeaturedImageToMediaItemConnectionEdge>;
  /** The database identifier for the featured image node assigned to the content node */
  featuredImageDatabaseId?: Maybe<Scalars['Int']>;
  /** Globally unique ID of the featured image assigned to the node */
  featuredImageId?: Maybe<Scalars['ID']>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  guid?: Maybe<Scalars['String']>;
  /** The unique resource identifier path */
  id: Scalars['ID'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  modified?: Maybe<Scalars['Date']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  modifiedGmt?: Maybe<Scalars['Date']>;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  slug?: Maybe<Scalars['String']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']>;
  /** The template assigned to a node of content */
  template?: Maybe<WpContentTemplate>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};

export type WpNodeWithRevisions = {
  /** True if the node is a revision of another node */
  isRevision?: Maybe<Scalars['Boolean']>;
};

export type WpNodeWithPageAttributes = {
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: Maybe<Scalars['Int']>;
};

export type WpMenuItemLinkable = {
  /** The unique resource identifier path */
  databaseId: Scalars['Int'];
  /** The unique resource identifier path */
  id: Scalars['ID'];
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};

/** Connection between the NodeWithFeaturedImage type and the MediaItem type */
export type WpNodeWithFeaturedImageToMediaItemConnectionEdge = {
  /** The node of the connection, without the edges */
  node?: Maybe<WpMediaItem>;
};

/** Connection between the NodeWithRevisions type and the ContentNode type */
export type WpNodeWithRevisionsToContentNodeConnectionEdge = {
  /** The node of the connection, without the edges */
  node?: Maybe<WpContentNode>;
};

/** Connection between the page type and the Comment type */
export type WpPageToCommentConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpComment>>>;
};

/** Language (Polylang) */
export type WpLanguage = {
  /** Language code (Polylang) */
  code?: Maybe<WpLanguageCodeEnum>;
  /** Language term front page URL */
  homeUrl?: Maybe<Scalars['String']>;
  /** Language ID (Polylang) */
  id: Scalars['ID'];
  /** Language locale (Polylang) */
  locale?: Maybe<Scalars['String']>;
  /** Human readable language name (Polylang) */
  name?: Maybe<Scalars['String']>;
  /** Language term slug. Prefer the &quot;code&quot; field if possible (Polylang) */
  slug?: Maybe<Scalars['String']>;
};

/** Enum of all available language codes */
export type WpLanguageCodeEnum =
  | 'CS'
  | 'EN'
  | 'IT';

/** Connection between the page type and the TermNode type */
export type WpPageToTermNodeConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpTermNode>>>;
};

export type WpTermNode = {
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** Identifies the primary key from the database. */
  databaseId: Scalars['Int'];
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** The name of the taxonomy that the object is associated with */
  taxonomyName?: Maybe<Scalars['String']>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

/** Connection between the User type and the post type */
export type WpUserToPostConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpPost>>>;
};

/** The post type */
export type WpPost = Node & WpNode & WpContentNode & WpUniformResourceIdentifiable & WpDatabaseIdentifier & WpNodeWithTemplate & WpNodeWithTitle & WpNodeWithContentEditor & WpNodeWithAuthor & WpNodeWithFeaturedImage & WpNodeWithExcerpt & WpNodeWithComments & WpNodeWithTrackbacks & WpNodeWithRevisions & WpMenuItemLinkable & {
  /** Connection between the NodeWithAuthor type and the User type */
  author?: Maybe<WpNodeWithAuthorToUserConnectionEdge>;
  /** The database identifier of the author of the node */
  authorDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the author of the node */
  authorId?: Maybe<Scalars['ID']>;
  /** Connection between the post type and the category type */
  categories?: Maybe<WpPostToCategoryConnection>;
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  commentCount?: Maybe<Scalars['Int']>;
  /** Whether the comments are open or closed for this particular post. */
  commentStatus?: Maybe<Scalars['String']>;
  /** Connection between the post type and the Comment type */
  comments?: Maybe<WpPostToCommentConnection>;
  /** The content of the post. */
  content?: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the ContentType type */
  contentType?: Maybe<WpContentNodeToContentTypeConnectionEdge>;
  /** The name of the Content Type the node belongs to */
  contentTypeName: Scalars['String'];
  /** The unique resource identifier path */
  databaseId: Scalars['Int'];
  /** Post publishing date. */
  date?: Maybe<Scalars['Date']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['Date']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  /** The excerpt of the post. */
  excerpt?: Maybe<Scalars['String']>;
  /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
  featuredImage?: Maybe<WpNodeWithFeaturedImageToMediaItemConnectionEdge>;
  /** The database identifier for the featured image node assigned to the content node */
  featuredImageDatabaseId?: Maybe<Scalars['Int']>;
  /** Globally unique ID of the featured image assigned to the node */
  featuredImageId?: Maybe<Scalars['ID']>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  guid?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** True if the node is a revision of another node */
  isRevision?: Maybe<Scalars['Boolean']>;
  /** Whether this page is sticky */
  isSticky: Scalars['Boolean'];
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** Polylang language */
  language?: Maybe<WpLanguage>;
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  modified?: Maybe<Scalars['Date']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  modifiedGmt?: Maybe<Scalars['Date']>;
  /** Whether the pings are open or closed for this particular post. */
  pingStatus?: Maybe<Scalars['String']>;
  /** URLs that have been pinged. */
  pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Connection between the post type and the postFormat type */
  postFormats?: Maybe<WpPostToPostFormatConnection>;
  /** Added to the GraphQL Schema because the ACF Field Group &quot;Realization&quot; was set to Show in GraphQL. */
  realization?: Maybe<WpPost_Realization>;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  slug?: Maybe<Scalars['String']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']>;
  /** Connection between the post type and the tag type */
  tags?: Maybe<WpPostToTagConnection>;
  /** The template assigned to a node of content */
  template?: Maybe<WpContentTemplate>;
  /** Connection between the post type and the TermNode type */
  terms?: Maybe<WpPostToTermNodeConnection>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<Scalars['String']>;
  /** URLs queued to be pinged. */
  toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** List all translated versions of this post */
  translations?: Maybe<Array<Maybe<WpPost>>>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


/** The post type */
export type WpPostDateArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** The post type */
export type WpPostDateGmtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** The post type */
export type WpPostModifiedArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** The post type */
export type WpPostModifiedGmtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type WpNodeWithExcerpt = {
  /** The excerpt of the post. */
  excerpt?: Maybe<Scalars['String']>;
};

export type WpNodeWithTrackbacks = {
  /** Whether the pings are open or closed for this particular post. */
  pingStatus?: Maybe<Scalars['String']>;
  /** URLs that have been pinged. */
  pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** URLs queued to be pinged. */
  toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Connection between the post type and the category type */
export type WpPostToCategoryConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpCategory>>>;
};

/** The category type */
export type WpCategory = Node & WpNode & WpTermNode & WpUniformResourceIdentifiable & WpDatabaseIdentifier & WpHierarchicalTermNode & WpMenuItemLinkable & {
  /** The ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  ancestors?: Maybe<WpCategoryToAncestorsCategoryConnection>;
  /** Connection between the category type and the category type */
  wpChildren?: Maybe<WpCategoryToCategoryConnection>;
  /** Connection between the category type and the ContentNode type */
  contentNodes?: Maybe<WpCategoryToContentNodeConnection>;
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  databaseId: Scalars['Int'];
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** List available translations for this post */
  language?: Maybe<WpLanguage>;
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /** Connection between the category type and the category type */
  wpParent?: Maybe<WpCategoryToParentCategoryConnectionEdge>;
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']>;
  /** Connection between the category type and the post type */
  posts?: Maybe<WpCategoryToPostConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** Connection between the category type and the Taxonomy type */
  taxonomy?: Maybe<WpCategoryToTaxonomyConnectionEdge>;
  /** The name of the taxonomy that the object is associated with */
  taxonomyName?: Maybe<Scalars['String']>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /** List all translated versions of this term */
  translations?: Maybe<Array<Maybe<WpCategory>>>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type WpHierarchicalTermNode = {
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']>;
};

/** Connection between the category type and the category type */
export type WpCategoryToAncestorsCategoryConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpCategory>>>;
};

/** Connection between the category type and the category type */
export type WpCategoryToCategoryConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpCategory>>>;
};

/** Connection between the category type and the ContentNode type */
export type WpCategoryToContentNodeConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpContentNode>>>;
};

/** Connection between the category type and the category type */
export type WpCategoryToParentCategoryConnectionEdge = {
  /** The node of the connection, without the edges */
  node?: Maybe<WpCategory>;
};

/** Connection between the category type and the post type */
export type WpCategoryToPostConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpPost>>>;
};

/** Connection between the category type and the Taxonomy type */
export type WpCategoryToTaxonomyConnectionEdge = {
  /** The node of the connection, without the edges */
  node?: Maybe<WpTaxonomy>;
};

/** Connection between the post type and the Comment type */
export type WpPostToCommentConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpComment>>>;
};

/** Connection between the post type and the postFormat type */
export type WpPostToPostFormatConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpPostFormat>>>;
};

/** The postFormat type */
export type WpPostFormat = Node & WpNode & WpTermNode & WpUniformResourceIdentifiable & WpDatabaseIdentifier & {
  /** Connection between the postFormat type and the ContentNode type */
  contentNodes?: Maybe<WpPostFormatToContentNodeConnection>;
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /** Connection between the postFormat type and the post type */
  posts?: Maybe<WpPostFormatToPostConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** Connection between the postFormat type and the Taxonomy type */
  taxonomy?: Maybe<WpPostFormatToTaxonomyConnectionEdge>;
  /** The name of the taxonomy that the object is associated with */
  taxonomyName?: Maybe<Scalars['String']>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

/** Connection between the postFormat type and the ContentNode type */
export type WpPostFormatToContentNodeConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpContentNode>>>;
};

/** Connection between the postFormat type and the post type */
export type WpPostFormatToPostConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpPost>>>;
};

/** Connection between the postFormat type and the Taxonomy type */
export type WpPostFormatToTaxonomyConnectionEdge = {
  /** The node of the connection, without the edges */
  node?: Maybe<WpTaxonomy>;
};

/** Field Group */
export type WpPost_Realization = WpAcfFieldGroup & {
  dateRealization?: Maybe<Scalars['Float']>;
  describedTitle?: Maybe<Scalars['String']>;
  /** The name of the ACF Field Group */
  fieldGroupName?: Maybe<Scalars['String']>;
  image?: Maybe<WpMediaItem>;
  location?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type WpAcfFieldGroup = {
  /** The name of the ACF Field Group */
  fieldGroupName?: Maybe<Scalars['String']>;
};

/** Connection between the post type and the tag type */
export type WpPostToTagConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpTag>>>;
};

/** The tag type */
export type WpTag = Node & WpNode & WpTermNode & WpUniformResourceIdentifiable & WpDatabaseIdentifier & WpMenuItemLinkable & {
  /** Connection between the tag type and the ContentNode type */
  contentNodes?: Maybe<WpTagToContentNodeConnection>;
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  databaseId: Scalars['Int'];
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** List available translations for this post */
  language?: Maybe<WpLanguage>;
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /** Connection between the tag type and the post type */
  posts?: Maybe<WpTagToPostConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** Connection between the tag type and the Taxonomy type */
  taxonomy?: Maybe<WpTagToTaxonomyConnectionEdge>;
  /** The name of the taxonomy that the object is associated with */
  taxonomyName?: Maybe<Scalars['String']>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /** List all translated versions of this term */
  translations?: Maybe<Array<Maybe<WpTag>>>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

/** Connection between the tag type and the ContentNode type */
export type WpTagToContentNodeConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpContentNode>>>;
};

/** Connection between the tag type and the post type */
export type WpTagToPostConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpPost>>>;
};

/** Connection between the tag type and the Taxonomy type */
export type WpTagToTaxonomyConnectionEdge = {
  /** The node of the connection, without the edges */
  node?: Maybe<WpTaxonomy>;
};

/** Connection between the post type and the TermNode type */
export type WpPostToTermNodeConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpTermNode>>>;
};

/** Connection between the User type and the UserRole type */
export type WpUserToUserRoleConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpUserRole>>>;
};

/** A user role object */
export type WpUserRole = Node & WpNode & {
  /** The capabilities that belong to this role */
  capabilities?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The display name of the role */
  displayName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** The registered name of the role */
  name?: Maybe<Scalars['String']>;
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

/** All of the registered settings */
export type WpSettings = {
  /** Settings of the the string Settings Group */
  discussionSettingsDefaultCommentStatus?: Maybe<Scalars['String']>;
  /** Settings of the the string Settings Group */
  discussionSettingsDefaultPingStatus?: Maybe<Scalars['String']>;
  /** Settings of the the string Settings Group */
  generalSettingsDateFormat?: Maybe<Scalars['String']>;
  /** Settings of the the string Settings Group */
  generalSettingsDescription?: Maybe<Scalars['String']>;
  /** Settings of the the string Settings Group */
  generalSettingsEmail?: Maybe<Scalars['String']>;
  /** Settings of the the string Settings Group */
  generalSettingsLanguage?: Maybe<Scalars['String']>;
  /** Settings of the the integer Settings Group */
  generalSettingsStartOfWeek?: Maybe<Scalars['Int']>;
  /** Settings of the the string Settings Group */
  generalSettingsTimeFormat?: Maybe<Scalars['String']>;
  /** Settings of the the string Settings Group */
  generalSettingsTimezone?: Maybe<Scalars['String']>;
  /** Settings of the the string Settings Group */
  generalSettingsTitle?: Maybe<Scalars['String']>;
  /** Settings of the the string Settings Group */
  generalSettingsUrl?: Maybe<Scalars['String']>;
  /** Settings of the the integer Settings Group */
  readingSettingsPostsPerPage?: Maybe<Scalars['Int']>;
  /** Settings of the the integer Settings Group */
  writingSettingsDefaultCategory?: Maybe<Scalars['Int']>;
  /** Settings of the the string Settings Group */
  writingSettingsDefaultPostFormat?: Maybe<Scalars['String']>;
  /** Settings of the the boolean Settings Group */
  writingSettingsUseSmilies?: Maybe<Scalars['Boolean']>;
};

/** The discussion setting type */
export type WpDiscussionSettings = {
  /** Allow people to submit comments on new posts. */
  defaultCommentStatus?: Maybe<Scalars['String']>;
  /** Allow link notifications from other blogs (pingbacks and trackbacks) on new articles. */
  defaultPingStatus?: Maybe<Scalars['String']>;
};

/** The general setting type */
export type WpGeneralSettings = {
  /** A date format for all date strings. */
  dateFormat?: Maybe<Scalars['String']>;
  /** Site tagline. */
  description?: Maybe<Scalars['String']>;
  /** This address is used for admin purposes, like new user notification. */
  email?: Maybe<Scalars['String']>;
  /** WordPress locale code. */
  language?: Maybe<Scalars['String']>;
  /** A day number of the week that the week should start on. */
  startOfWeek?: Maybe<Scalars['Int']>;
  /** A time format for all time strings. */
  timeFormat?: Maybe<Scalars['String']>;
  /** A city in the same timezone as you. */
  timezone?: Maybe<Scalars['String']>;
  /** Site title. */
  title?: Maybe<Scalars['String']>;
  /** Site URL. */
  url?: Maybe<Scalars['String']>;
};

/** Menus are the containers for navigation items. Menus can be assigned to menu locations, which are typically registered by the active theme. */
export type WpMenu = Node & WpNode & WpDatabaseIdentifier & {
  /** The number of items in the menu */
  count?: Maybe<Scalars['Int']>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  id: Scalars['ID'];
  /** The locations a menu is assigned to */
  locations?: Maybe<Array<Maybe<WpMenuLocationEnum>>>;
  /** Connection between the Menu type and the MenuItem type */
  menuItems?: Maybe<WpMenuToMenuItemConnection>;
  /** Display name of the menu. Equivalent to WP_Term-&gt;name. */
  name?: Maybe<Scalars['String']>;
  /** The url friendly name of the menu. Equivalent to WP_Term-&gt;slug */
  slug?: Maybe<Scalars['String']>;
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

/** Registered menu locations */
export type WpMenuLocationEnum =
  | 'PRIMARY'
  | 'PRIMARY___EN'
  | 'PRIMARY___IT';

/** Connection between the Menu type and the MenuItem type */
export type WpMenuToMenuItemConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpMenuItem>>>;
};

/** Navigation menu items are the individual items assigned to a menu. These are rendered as the links in a navigation menu. */
export type WpMenuItem = Node & WpNode & WpDatabaseIdentifier & {
  /** Connection between the MenuItem type and the MenuItem type */
  childItems?: Maybe<WpMenuItemToMenuItemConnection>;
  /** Connection from MenuItem to it&#039;s connected node */
  connectedNode?: Maybe<WpMenuItemToMenuItemLinkableConnectionEdge>;
  /** Class attribute for the menu item link */
  cssClasses?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** Description of the menu item. */
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** Label or title of the menu item. */
  label?: Maybe<Scalars['String']>;
  /** Link relationship (XFN) of the menu item. */
  linkRelationship?: Maybe<Scalars['String']>;
  /** The locations the menu item&#039;s Menu is assigned to */
  locations?: Maybe<Array<Maybe<WpMenuLocationEnum>>>;
  /** The Menu a MenuItem is part of */
  menu?: Maybe<WpMenuItemToMenuConnectionEdge>;
  /** Menu item order */
  order?: Maybe<Scalars['Int']>;
  /** The database id of the parent menu item or null if it is the root */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent nav menu item object. */
  parentId?: Maybe<Scalars['ID']>;
  /** Path for the resource. Relative path for internal resources. Absolute path for external resources. */
  path?: Maybe<Scalars['String']>;
  /** Target attribute for the menu item link. */
  target?: Maybe<Scalars['String']>;
  /** Title attribute for the menu item link */
  title?: Maybe<Scalars['String']>;
  /** URL or destination of the menu item. */
  url?: Maybe<Scalars['String']>;
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

/** Connection between the MenuItem type and the MenuItem type */
export type WpMenuItemToMenuItemConnection = {
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpMenuItem>>>;
};

/** Connection between the MenuItem type and the MenuItemLinkable type */
export type WpMenuItemToMenuItemLinkableConnectionEdge = {
  /** The node of the connection, without the edges */
  node?: Maybe<WpMenuItemLinkable>;
};

/** Connection between the MenuItem type and the Menu type */
export type WpMenuItemToMenuConnectionEdge = {
  /** The node of the connection, without the edges */
  node?: Maybe<WpMenu>;
};

/** The reading setting type */
export type WpReadingSettings = {
  /** Blog pages show at most. */
  postsPerPage?: Maybe<Scalars['Int']>;
};

/** Information needed by gatsby-source-wordpress. */
export type WpWpGatsby = {
  /** Returns wether or not pretty permalinks are enabled. */
  arePrettyPermalinksEnabled?: Maybe<Scalars['Boolean']>;
  /** Wether or not the Preview frontend URL is online. */
  isPreviewFrontendOnline?: Maybe<Scalars['Boolean']>;
};

/** The writing setting type */
export type WpWritingSettings = {
  /** Default post category. */
  defaultCategory?: Maybe<Scalars['Int']>;
  /** Default post format. */
  defaultPostFormat?: Maybe<Scalars['String']>;
  /** Convert emoticons like :-) and :-P to graphics on display. */
  useSmilies?: Maybe<Scalars['Boolean']>;
};

/** A Comment Author object */
export type WpCommentAuthor = Node & WpNode & WpCommenter & {
  /** Identifies the primary key from the database. */
  databaseId: Scalars['Int'];
  /** The email for the comment author */
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** The name for the comment author. */
  name?: Maybe<Scalars['String']>;
  /** The url the comment author. */
  url?: Maybe<Scalars['String']>;
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

/** The template assigned to the node */
export type WpDefaultTemplate = WpContentTemplate & {
  /** The name of the template */
  templateName?: Maybe<Scalars['String']>;
};

/** The template assigned to the node */
export type WpTemplate_3DRealizations = WpContentTemplate & {
  /** The name of the template */
  templateName?: Maybe<Scalars['String']>;
};

/** The template assigned to the node */
export type WpTemplate_AboutMe = WpContentTemplate & {
  /** The name of the template */
  templateName?: Maybe<Scalars['String']>;
};

/** The template assigned to the node */
export type WpTemplate_Contacts = WpContentTemplate & {
  /** The name of the template */
  templateName?: Maybe<Scalars['String']>;
};

/** The template assigned to the node */
export type WpTemplate_FenShui = WpContentTemplate & {
  /** The name of the template */
  templateName?: Maybe<Scalars['String']>;
};

/** The template assigned to the node */
export type WpTemplate_Home = WpContentTemplate & {
  /** The name of the template */
  templateName?: Maybe<Scalars['String']>;
};

/** The template assigned to the node */
export type WpTemplate_Inspiration = WpContentTemplate & {
  /** The name of the template */
  templateName?: Maybe<Scalars['String']>;
};

/** The template assigned to the node */
export type WpTemplate_MyServices = WpContentTemplate & {
  /** The name of the template */
  templateName?: Maybe<Scalars['String']>;
};

/** The template assigned to the node */
export type WpTemplate_Partners = WpContentTemplate & {
  /** The name of the template */
  templateName?: Maybe<Scalars['String']>;
};

/** Non-node WPGraphQL root fields. */
export type Wp = Node & {
  /** Entry point to get all settings for the site */
  allSettings?: Maybe<WpSettings>;
  /** Get language list */
  defaultLanguage?: Maybe<WpLanguage>;
  /** Fields of the &#039;DiscussionSettings&#039; settings group */
  discussionSettings?: Maybe<WpDiscussionSettings>;
  /** Fields of the &#039;GeneralSettings&#039; settings group */
  generalSettings?: Maybe<WpGeneralSettings>;
  /** List available languages */
  languages?: Maybe<Array<Maybe<WpLanguage>>>;
  /** Fields of the &#039;ReadingSettings&#039; settings group */
  readingSettings?: Maybe<WpReadingSettings>;
  /** Information needed by gatsby-source-wordpress. */
  wpGatsby?: Maybe<WpWpGatsby>;
  /** Fields of the &#039;WritingSettings&#039; settings group */
  writingSettings?: Maybe<WpWritingSettings>;
  nodeType?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  siteFunction?: Maybe<SiteFunction>;
  allSiteFunction: SiteFunctionConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  wpContentNode?: Maybe<WpContentNode>;
  allWpContentNode: WpContentNodeConnection;
  wpContentType?: Maybe<WpContentType>;
  allWpContentType: WpContentTypeConnection;
  wpTaxonomy?: Maybe<WpTaxonomy>;
  allWpTaxonomy: WpTaxonomyConnection;
  wpUser?: Maybe<WpUser>;
  allWpUser: WpUserConnection;
  wpComment?: Maybe<WpComment>;
  allWpComment: WpCommentConnection;
  wpMediaItem?: Maybe<WpMediaItem>;
  allWpMediaItem: WpMediaItemConnection;
  wpPage?: Maybe<WpPage>;
  allWpPage: WpPageConnection;
  wpTermNode?: Maybe<WpTermNode>;
  allWpTermNode: WpTermNodeConnection;
  wpPost?: Maybe<WpPost>;
  allWpPost: WpPostConnection;
  wpCategory?: Maybe<WpCategory>;
  allWpCategory: WpCategoryConnection;
  wpPostFormat?: Maybe<WpPostFormat>;
  allWpPostFormat: WpPostFormatConnection;
  wpTag?: Maybe<WpTag>;
  allWpTag: WpTagConnection;
  wpUserRole?: Maybe<WpUserRole>;
  allWpUserRole: WpUserRoleConnection;
  wpMenu?: Maybe<WpMenu>;
  allWpMenu: WpMenuConnection;
  wpMenuItem?: Maybe<WpMenuItem>;
  allWpMenuItem: WpMenuItemConnection;
  wpCommentAuthor?: Maybe<WpCommentAuthor>;
  allWpCommentAuthor: WpCommentAuthorConnection;
  wp?: Maybe<Wp>;
  allWp: WpConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: InputMaybe<FileFilterInput>;
  sort?: InputMaybe<FileSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: InputMaybe<DirectoryFilterInput>;
  sort?: InputMaybe<DirectorySortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  trailingSlash?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: InputMaybe<SiteFilterInput>;
  sort?: InputMaybe<SiteSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteFunctionArgs = {
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteFunctionArgs = {
  filter?: InputMaybe<SiteFunctionFilterInput>;
  sort?: InputMaybe<SiteFunctionSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: InputMaybe<StringQueryOperatorInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSitePageArgs = {
  filter?: InputMaybe<SitePageFilterInput>;
  sort?: InputMaybe<SitePageSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  resolve?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: InputMaybe<SitePluginFilterInput>;
  sort?: InputMaybe<SitePluginSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: InputMaybe<SiteBuildMetadataFilterInput>;
  sort?: InputMaybe<SiteBuildMetadataSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: InputMaybe<ImageSharpFilterInput>;
  sort?: InputMaybe<ImageSharpSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryWpContentNodeArgs = {
  contentType?: InputMaybe<WpContentNodeToContentTypeConnectionEdgeFilterInput>;
  contentTypeName?: InputMaybe<StringQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  date?: InputMaybe<DateQueryOperatorInput>;
  dateGmt?: InputMaybe<DateQueryOperatorInput>;
  desiredSlug?: InputMaybe<StringQueryOperatorInput>;
  enclosure?: InputMaybe<StringQueryOperatorInput>;
  guid?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  lastEditedBy?: InputMaybe<WpContentNodeToEditLastConnectionEdgeFilterInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  modified?: InputMaybe<DateQueryOperatorInput>;
  modifiedGmt?: InputMaybe<DateQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  status?: InputMaybe<StringQueryOperatorInput>;
  template?: InputMaybe<WpContentTemplateFilterInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllWpContentNodeArgs = {
  filter?: InputMaybe<WpContentNodeFilterInput>;
  sort?: InputMaybe<WpContentNodeSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryWpContentTypeArgs = {
  archivePath?: InputMaybe<StringQueryOperatorInput>;
  canExport?: InputMaybe<BooleanQueryOperatorInput>;
  connectedTaxonomies?: InputMaybe<WpContentTypeToTaxonomyConnectionFilterInput>;
  contentNodes?: InputMaybe<WpContentTypeToContentNodeConnectionFilterInput>;
  deleteWithUser?: InputMaybe<BooleanQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  excludeFromSearch?: InputMaybe<BooleanQueryOperatorInput>;
  graphqlPluralName?: InputMaybe<StringQueryOperatorInput>;
  graphqlSingleName?: InputMaybe<StringQueryOperatorInput>;
  hasArchive?: InputMaybe<BooleanQueryOperatorInput>;
  hierarchical?: InputMaybe<BooleanQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isFrontPage?: InputMaybe<BooleanQueryOperatorInput>;
  isPostsPage?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  label?: InputMaybe<StringQueryOperatorInput>;
  labels?: InputMaybe<WpPostTypeLabelDetailsFilterInput>;
  menuIcon?: InputMaybe<StringQueryOperatorInput>;
  menuPosition?: InputMaybe<IntQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  public?: InputMaybe<BooleanQueryOperatorInput>;
  publiclyQueryable?: InputMaybe<BooleanQueryOperatorInput>;
  restBase?: InputMaybe<StringQueryOperatorInput>;
  restControllerClass?: InputMaybe<StringQueryOperatorInput>;
  showInAdminBar?: InputMaybe<BooleanQueryOperatorInput>;
  showInGraphql?: InputMaybe<BooleanQueryOperatorInput>;
  showInMenu?: InputMaybe<BooleanQueryOperatorInput>;
  showInNavMenus?: InputMaybe<BooleanQueryOperatorInput>;
  showInRest?: InputMaybe<BooleanQueryOperatorInput>;
  showUi?: InputMaybe<BooleanQueryOperatorInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllWpContentTypeArgs = {
  filter?: InputMaybe<WpContentTypeFilterInput>;
  sort?: InputMaybe<WpContentTypeSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryWpTaxonomyArgs = {
  archivePath?: InputMaybe<StringQueryOperatorInput>;
  connectedContentTypes?: InputMaybe<WpTaxonomyToContentTypeConnectionFilterInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  graphqlPluralName?: InputMaybe<StringQueryOperatorInput>;
  graphqlSingleName?: InputMaybe<StringQueryOperatorInput>;
  hierarchical?: InputMaybe<BooleanQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  label?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  public?: InputMaybe<BooleanQueryOperatorInput>;
  restBase?: InputMaybe<StringQueryOperatorInput>;
  restControllerClass?: InputMaybe<StringQueryOperatorInput>;
  showCloud?: InputMaybe<BooleanQueryOperatorInput>;
  showInAdminColumn?: InputMaybe<BooleanQueryOperatorInput>;
  showInGraphql?: InputMaybe<BooleanQueryOperatorInput>;
  showInMenu?: InputMaybe<BooleanQueryOperatorInput>;
  showInNavMenus?: InputMaybe<BooleanQueryOperatorInput>;
  showInQuickEdit?: InputMaybe<BooleanQueryOperatorInput>;
  showInRest?: InputMaybe<BooleanQueryOperatorInput>;
  showUi?: InputMaybe<BooleanQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllWpTaxonomyArgs = {
  filter?: InputMaybe<WpTaxonomyFilterInput>;
  sort?: InputMaybe<WpTaxonomySortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryWpUserArgs = {
  avatar?: InputMaybe<WpAvatarFilterInput>;
  capKey?: InputMaybe<StringQueryOperatorInput>;
  capabilities?: InputMaybe<StringQueryOperatorInput>;
  comments?: InputMaybe<WpUserToCommentConnectionFilterInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  email?: InputMaybe<StringQueryOperatorInput>;
  extraCapabilities?: InputMaybe<StringQueryOperatorInput>;
  firstName?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  lastName?: InputMaybe<StringQueryOperatorInput>;
  locale?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nicename?: InputMaybe<StringQueryOperatorInput>;
  nickname?: InputMaybe<StringQueryOperatorInput>;
  pages?: InputMaybe<WpUserToPageConnectionFilterInput>;
  posts?: InputMaybe<WpUserToPostConnectionFilterInput>;
  registeredDate?: InputMaybe<StringQueryOperatorInput>;
  roles?: InputMaybe<WpUserToUserRoleConnectionFilterInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  username?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllWpUserArgs = {
  filter?: InputMaybe<WpUserFilterInput>;
  sort?: InputMaybe<WpUserSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryWpCommentArgs = {
  agent?: InputMaybe<StringQueryOperatorInput>;
  approved?: InputMaybe<BooleanQueryOperatorInput>;
  author?: InputMaybe<WpCommentToCommenterConnectionEdgeFilterInput>;
  authorIp?: InputMaybe<StringQueryOperatorInput>;
  commentedOn?: InputMaybe<WpCommentToContentNodeConnectionEdgeFilterInput>;
  content?: InputMaybe<StringQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  date?: InputMaybe<DateQueryOperatorInput>;
  dateGmt?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  karma?: InputMaybe<IntQueryOperatorInput>;
  wpParent?: InputMaybe<WpCommentToParentCommentConnectionEdgeFilterInput>;
  parentDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  parentId?: InputMaybe<IdQueryOperatorInput>;
  replies?: InputMaybe<WpCommentToCommentConnectionFilterInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllWpCommentArgs = {
  filter?: InputMaybe<WpCommentFilterInput>;
  sort?: InputMaybe<WpCommentSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryWpMediaItemArgs = {
  altText?: InputMaybe<StringQueryOperatorInput>;
  ancestors?: InputMaybe<WpHierarchicalContentNodeToContentNodeAncestorsConnectionFilterInput>;
  author?: InputMaybe<WpNodeWithAuthorToUserConnectionEdgeFilterInput>;
  authorDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  authorId?: InputMaybe<IdQueryOperatorInput>;
  caption?: InputMaybe<StringQueryOperatorInput>;
  wpChildren?: InputMaybe<WpHierarchicalContentNodeToContentNodeChildrenConnectionFilterInput>;
  commentCount?: InputMaybe<IntQueryOperatorInput>;
  commentStatus?: InputMaybe<StringQueryOperatorInput>;
  comments?: InputMaybe<WpMediaItemToCommentConnectionFilterInput>;
  contentType?: InputMaybe<WpContentNodeToContentTypeConnectionEdgeFilterInput>;
  contentTypeName?: InputMaybe<StringQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  date?: InputMaybe<DateQueryOperatorInput>;
  dateGmt?: InputMaybe<DateQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  desiredSlug?: InputMaybe<StringQueryOperatorInput>;
  enclosure?: InputMaybe<StringQueryOperatorInput>;
  fileSize?: InputMaybe<IntQueryOperatorInput>;
  guid?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  lastEditedBy?: InputMaybe<WpContentNodeToEditLastConnectionEdgeFilterInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  mediaDetails?: InputMaybe<WpMediaDetailsFilterInput>;
  mediaItemUrl?: InputMaybe<StringQueryOperatorInput>;
  mediaType?: InputMaybe<StringQueryOperatorInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  modified?: InputMaybe<DateQueryOperatorInput>;
  modifiedGmt?: InputMaybe<DateQueryOperatorInput>;
  wpParent?: InputMaybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdgeFilterInput>;
  parentDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  parentId?: InputMaybe<IdQueryOperatorInput>;
  sizes?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  sourceUrl?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  status?: InputMaybe<StringQueryOperatorInput>;
  template?: InputMaybe<WpContentTemplateFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  remoteFile?: InputMaybe<FileFilterInput>;
  localFile?: InputMaybe<FileFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  filename?: InputMaybe<StringQueryOperatorInput>;
  filesize?: InputMaybe<IntQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  publicUrl?: InputMaybe<StringQueryOperatorInput>;
  resize?: InputMaybe<RemoteFileResizeFilterInput>;
  gatsbyImage?: InputMaybe<JsonQueryOperatorInput>;
};


export type QueryAllWpMediaItemArgs = {
  filter?: InputMaybe<WpMediaItemFilterInput>;
  sort?: InputMaybe<WpMediaItemSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryWpPageArgs = {
  ancestors?: InputMaybe<WpHierarchicalContentNodeToContentNodeAncestorsConnectionFilterInput>;
  author?: InputMaybe<WpNodeWithAuthorToUserConnectionEdgeFilterInput>;
  authorDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  authorId?: InputMaybe<IdQueryOperatorInput>;
  wpChildren?: InputMaybe<WpHierarchicalContentNodeToContentNodeChildrenConnectionFilterInput>;
  commentCount?: InputMaybe<IntQueryOperatorInput>;
  commentStatus?: InputMaybe<StringQueryOperatorInput>;
  comments?: InputMaybe<WpPageToCommentConnectionFilterInput>;
  content?: InputMaybe<StringQueryOperatorInput>;
  contentType?: InputMaybe<WpContentNodeToContentTypeConnectionEdgeFilterInput>;
  contentTypeName?: InputMaybe<StringQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  date?: InputMaybe<DateQueryOperatorInput>;
  dateGmt?: InputMaybe<DateQueryOperatorInput>;
  desiredSlug?: InputMaybe<StringQueryOperatorInput>;
  enclosure?: InputMaybe<StringQueryOperatorInput>;
  featuredImage?: InputMaybe<WpNodeWithFeaturedImageToMediaItemConnectionEdgeFilterInput>;
  featuredImageDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  featuredImageId?: InputMaybe<IdQueryOperatorInput>;
  guid?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isFrontPage?: InputMaybe<BooleanQueryOperatorInput>;
  isPostsPage?: InputMaybe<BooleanQueryOperatorInput>;
  isPrivacyPage?: InputMaybe<BooleanQueryOperatorInput>;
  isRevision?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  language?: InputMaybe<WpLanguageFilterInput>;
  lastEditedBy?: InputMaybe<WpContentNodeToEditLastConnectionEdgeFilterInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  menuOrder?: InputMaybe<IntQueryOperatorInput>;
  modified?: InputMaybe<DateQueryOperatorInput>;
  modifiedGmt?: InputMaybe<DateQueryOperatorInput>;
  wpParent?: InputMaybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdgeFilterInput>;
  parentDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  parentId?: InputMaybe<IdQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  status?: InputMaybe<StringQueryOperatorInput>;
  template?: InputMaybe<WpContentTemplateFilterInput>;
  terms?: InputMaybe<WpPageToTermNodeConnectionFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  translations?: InputMaybe<WpPageFilterListInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllWpPageArgs = {
  filter?: InputMaybe<WpPageFilterInput>;
  sort?: InputMaybe<WpPageSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryWpTermNodeArgs = {
  count?: InputMaybe<IntQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  taxonomyName?: InputMaybe<StringQueryOperatorInput>;
  termGroupId?: InputMaybe<IntQueryOperatorInput>;
  termTaxonomyId?: InputMaybe<IntQueryOperatorInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllWpTermNodeArgs = {
  filter?: InputMaybe<WpTermNodeFilterInput>;
  sort?: InputMaybe<WpTermNodeSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryWpPostArgs = {
  author?: InputMaybe<WpNodeWithAuthorToUserConnectionEdgeFilterInput>;
  authorDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  authorId?: InputMaybe<IdQueryOperatorInput>;
  categories?: InputMaybe<WpPostToCategoryConnectionFilterInput>;
  commentCount?: InputMaybe<IntQueryOperatorInput>;
  commentStatus?: InputMaybe<StringQueryOperatorInput>;
  comments?: InputMaybe<WpPostToCommentConnectionFilterInput>;
  content?: InputMaybe<StringQueryOperatorInput>;
  contentType?: InputMaybe<WpContentNodeToContentTypeConnectionEdgeFilterInput>;
  contentTypeName?: InputMaybe<StringQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  date?: InputMaybe<DateQueryOperatorInput>;
  dateGmt?: InputMaybe<DateQueryOperatorInput>;
  desiredSlug?: InputMaybe<StringQueryOperatorInput>;
  enclosure?: InputMaybe<StringQueryOperatorInput>;
  excerpt?: InputMaybe<StringQueryOperatorInput>;
  featuredImage?: InputMaybe<WpNodeWithFeaturedImageToMediaItemConnectionEdgeFilterInput>;
  featuredImageDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  featuredImageId?: InputMaybe<IdQueryOperatorInput>;
  guid?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isRevision?: InputMaybe<BooleanQueryOperatorInput>;
  isSticky?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  language?: InputMaybe<WpLanguageFilterInput>;
  lastEditedBy?: InputMaybe<WpContentNodeToEditLastConnectionEdgeFilterInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  modified?: InputMaybe<DateQueryOperatorInput>;
  modifiedGmt?: InputMaybe<DateQueryOperatorInput>;
  pingStatus?: InputMaybe<StringQueryOperatorInput>;
  pinged?: InputMaybe<StringQueryOperatorInput>;
  postFormats?: InputMaybe<WpPostToPostFormatConnectionFilterInput>;
  realization?: InputMaybe<WpPost_RealizationFilterInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  status?: InputMaybe<StringQueryOperatorInput>;
  tags?: InputMaybe<WpPostToTagConnectionFilterInput>;
  template?: InputMaybe<WpContentTemplateFilterInput>;
  terms?: InputMaybe<WpPostToTermNodeConnectionFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  toPing?: InputMaybe<StringQueryOperatorInput>;
  translations?: InputMaybe<WpPostFilterListInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllWpPostArgs = {
  filter?: InputMaybe<WpPostFilterInput>;
  sort?: InputMaybe<WpPostSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryWpCategoryArgs = {
  ancestors?: InputMaybe<WpCategoryToAncestorsCategoryConnectionFilterInput>;
  wpChildren?: InputMaybe<WpCategoryToCategoryConnectionFilterInput>;
  contentNodes?: InputMaybe<WpCategoryToContentNodeConnectionFilterInput>;
  count?: InputMaybe<IntQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  language?: InputMaybe<WpLanguageFilterInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  wpParent?: InputMaybe<WpCategoryToParentCategoryConnectionEdgeFilterInput>;
  parentDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  parentId?: InputMaybe<IdQueryOperatorInput>;
  posts?: InputMaybe<WpCategoryToPostConnectionFilterInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  taxonomy?: InputMaybe<WpCategoryToTaxonomyConnectionEdgeFilterInput>;
  taxonomyName?: InputMaybe<StringQueryOperatorInput>;
  termGroupId?: InputMaybe<IntQueryOperatorInput>;
  termTaxonomyId?: InputMaybe<IntQueryOperatorInput>;
  translations?: InputMaybe<WpCategoryFilterListInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllWpCategoryArgs = {
  filter?: InputMaybe<WpCategoryFilterInput>;
  sort?: InputMaybe<WpCategorySortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryWpPostFormatArgs = {
  contentNodes?: InputMaybe<WpPostFormatToContentNodeConnectionFilterInput>;
  count?: InputMaybe<IntQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  posts?: InputMaybe<WpPostFormatToPostConnectionFilterInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  taxonomy?: InputMaybe<WpPostFormatToTaxonomyConnectionEdgeFilterInput>;
  taxonomyName?: InputMaybe<StringQueryOperatorInput>;
  termGroupId?: InputMaybe<IntQueryOperatorInput>;
  termTaxonomyId?: InputMaybe<IntQueryOperatorInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllWpPostFormatArgs = {
  filter?: InputMaybe<WpPostFormatFilterInput>;
  sort?: InputMaybe<WpPostFormatSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryWpTagArgs = {
  contentNodes?: InputMaybe<WpTagToContentNodeConnectionFilterInput>;
  count?: InputMaybe<IntQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  language?: InputMaybe<WpLanguageFilterInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  posts?: InputMaybe<WpTagToPostConnectionFilterInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  taxonomy?: InputMaybe<WpTagToTaxonomyConnectionEdgeFilterInput>;
  taxonomyName?: InputMaybe<StringQueryOperatorInput>;
  termGroupId?: InputMaybe<IntQueryOperatorInput>;
  termTaxonomyId?: InputMaybe<IntQueryOperatorInput>;
  translations?: InputMaybe<WpTagFilterListInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllWpTagArgs = {
  filter?: InputMaybe<WpTagFilterInput>;
  sort?: InputMaybe<WpTagSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryWpUserRoleArgs = {
  capabilities?: InputMaybe<StringQueryOperatorInput>;
  displayName?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllWpUserRoleArgs = {
  filter?: InputMaybe<WpUserRoleFilterInput>;
  sort?: InputMaybe<WpUserRoleSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryWpMenuArgs = {
  count?: InputMaybe<IntQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  locations?: InputMaybe<WpMenuLocationEnumQueryOperatorInput>;
  menuItems?: InputMaybe<WpMenuToMenuItemConnectionFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllWpMenuArgs = {
  filter?: InputMaybe<WpMenuFilterInput>;
  sort?: InputMaybe<WpMenuSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryWpMenuItemArgs = {
  childItems?: InputMaybe<WpMenuItemToMenuItemConnectionFilterInput>;
  connectedNode?: InputMaybe<WpMenuItemToMenuItemLinkableConnectionEdgeFilterInput>;
  cssClasses?: InputMaybe<StringQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  label?: InputMaybe<StringQueryOperatorInput>;
  linkRelationship?: InputMaybe<StringQueryOperatorInput>;
  locations?: InputMaybe<WpMenuLocationEnumQueryOperatorInput>;
  menu?: InputMaybe<WpMenuItemToMenuConnectionEdgeFilterInput>;
  order?: InputMaybe<IntQueryOperatorInput>;
  parentDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  parentId?: InputMaybe<IdQueryOperatorInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  target?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllWpMenuItemArgs = {
  filter?: InputMaybe<WpMenuItemFilterInput>;
  sort?: InputMaybe<WpMenuItemSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryWpCommentAuthorArgs = {
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  email?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllWpCommentAuthorArgs = {
  filter?: InputMaybe<WpCommentAuthorFilterInput>;
  sort?: InputMaybe<WpCommentAuthorSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryWpArgs = {
  allSettings?: InputMaybe<WpSettingsFilterInput>;
  defaultLanguage?: InputMaybe<WpLanguageFilterInput>;
  discussionSettings?: InputMaybe<WpDiscussionSettingsFilterInput>;
  generalSettings?: InputMaybe<WpGeneralSettingsFilterInput>;
  languages?: InputMaybe<WpLanguageFilterListInput>;
  readingSettings?: InputMaybe<WpReadingSettingsFilterInput>;
  wpGatsby?: InputMaybe<WpWpGatsbyFilterInput>;
  writingSettings?: InputMaybe<WpWritingSettingsFilterInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllWpArgs = {
  filter?: InputMaybe<WpFilterInput>;
  sort?: InputMaybe<WpSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['String']>;
  glob?: InputMaybe<Scalars['String']>;
};

export type IntQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type DateQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
};

export type FloatQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: InputMaybe<ImageSharpFilterInput>;
};

export type ImageSharpFilterInput = {
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ImageSharpFixedFilterInput = {
  base64?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpFluidFilterInput = {
  base64?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  sizes?: InputMaybe<StringQueryOperatorInput>;
  originalImg?: InputMaybe<StringQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  presentationWidth?: InputMaybe<IntQueryOperatorInput>;
  presentationHeight?: InputMaybe<IntQueryOperatorInput>;
};

export type JsonQueryOperatorInput = {
  eq?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  regex?: InputMaybe<Scalars['JSON']>;
  glob?: InputMaybe<Scalars['JSON']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpResizeFilterInput = {
  src?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
};

export type NodeFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: InputMaybe<NodeFilterInput>;
};

export type InternalFilterInput = {
  content?: InputMaybe<StringQueryOperatorInput>;
  contentDigest?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  fieldOwners?: InputMaybe<StringQueryOperatorInput>;
  ignoreType?: InputMaybe<BooleanQueryOperatorInput>;
  mediaType?: InputMaybe<StringQueryOperatorInput>;
  owner?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type BooleanQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionSumArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'url'
  | 'publicURL'
  | 'childrenImageSharp'
  | 'childrenImageSharp___fixed___base64'
  | 'childrenImageSharp___fixed___tracedSVG'
  | 'childrenImageSharp___fixed___aspectRatio'
  | 'childrenImageSharp___fixed___width'
  | 'childrenImageSharp___fixed___height'
  | 'childrenImageSharp___fixed___src'
  | 'childrenImageSharp___fixed___srcSet'
  | 'childrenImageSharp___fixed___srcWebp'
  | 'childrenImageSharp___fixed___srcSetWebp'
  | 'childrenImageSharp___fixed___originalName'
  | 'childrenImageSharp___fluid___base64'
  | 'childrenImageSharp___fluid___tracedSVG'
  | 'childrenImageSharp___fluid___aspectRatio'
  | 'childrenImageSharp___fluid___src'
  | 'childrenImageSharp___fluid___srcSet'
  | 'childrenImageSharp___fluid___srcWebp'
  | 'childrenImageSharp___fluid___srcSetWebp'
  | 'childrenImageSharp___fluid___sizes'
  | 'childrenImageSharp___fluid___originalImg'
  | 'childrenImageSharp___fluid___originalName'
  | 'childrenImageSharp___fluid___presentationWidth'
  | 'childrenImageSharp___fluid___presentationHeight'
  | 'childrenImageSharp___gatsbyImageData'
  | 'childrenImageSharp___original___width'
  | 'childrenImageSharp___original___height'
  | 'childrenImageSharp___original___src'
  | 'childrenImageSharp___resize___src'
  | 'childrenImageSharp___resize___tracedSVG'
  | 'childrenImageSharp___resize___width'
  | 'childrenImageSharp___resize___height'
  | 'childrenImageSharp___resize___aspectRatio'
  | 'childrenImageSharp___resize___originalName'
  | 'childrenImageSharp___id'
  | 'childrenImageSharp___parent___id'
  | 'childrenImageSharp___parent___parent___id'
  | 'childrenImageSharp___parent___parent___children'
  | 'childrenImageSharp___parent___children'
  | 'childrenImageSharp___parent___children___id'
  | 'childrenImageSharp___parent___children___children'
  | 'childrenImageSharp___parent___internal___content'
  | 'childrenImageSharp___parent___internal___contentDigest'
  | 'childrenImageSharp___parent___internal___description'
  | 'childrenImageSharp___parent___internal___fieldOwners'
  | 'childrenImageSharp___parent___internal___ignoreType'
  | 'childrenImageSharp___parent___internal___mediaType'
  | 'childrenImageSharp___parent___internal___owner'
  | 'childrenImageSharp___parent___internal___type'
  | 'childrenImageSharp___children'
  | 'childrenImageSharp___children___id'
  | 'childrenImageSharp___children___parent___id'
  | 'childrenImageSharp___children___parent___children'
  | 'childrenImageSharp___children___children'
  | 'childrenImageSharp___children___children___id'
  | 'childrenImageSharp___children___children___children'
  | 'childrenImageSharp___children___internal___content'
  | 'childrenImageSharp___children___internal___contentDigest'
  | 'childrenImageSharp___children___internal___description'
  | 'childrenImageSharp___children___internal___fieldOwners'
  | 'childrenImageSharp___children___internal___ignoreType'
  | 'childrenImageSharp___children___internal___mediaType'
  | 'childrenImageSharp___children___internal___owner'
  | 'childrenImageSharp___children___internal___type'
  | 'childrenImageSharp___internal___content'
  | 'childrenImageSharp___internal___contentDigest'
  | 'childrenImageSharp___internal___description'
  | 'childrenImageSharp___internal___fieldOwners'
  | 'childrenImageSharp___internal___ignoreType'
  | 'childrenImageSharp___internal___mediaType'
  | 'childrenImageSharp___internal___owner'
  | 'childrenImageSharp___internal___type'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___gatsbyImageData'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type FileGroupConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionSumArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileFilterInput = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type FileSortInput = {
  fields?: InputMaybe<Array<InputMaybe<FileFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SortOrderEnum =
  | 'ASC'
  | 'DESC';

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryFilterInput = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type DirectorySortInput = {
  fields?: InputMaybe<Array<InputMaybe<DirectoryFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteSiteMetadataFilterInput = {
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  siteUrl?: InputMaybe<StringQueryOperatorInput>;
  image?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'siteMetadata___siteUrl'
  | 'siteMetadata___image'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'jsxRuntime'
  | 'trailingSlash'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionSumArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  trailingSlash?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteFunctionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
};


export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  next?: Maybe<SiteFunction>;
  node: SiteFunction;
  previous?: Maybe<SiteFunction>;
};

export type SiteFunctionFieldsEnum =
  | 'functionRoute'
  | 'pluginName'
  | 'originalAbsoluteFilePath'
  | 'originalRelativeFilePath'
  | 'relativeCompiledFilePath'
  | 'absoluteCompiledFilePath'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteFunctionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionFilterInput = {
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteFunctionSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFunctionFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SitePluginFilterInput = {
  resolve?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'pageContext'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___pluginOptions'
  | 'pluginCreator___packageJson'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageFilterInput = {
  path?: InputMaybe<StringQueryOperatorInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SitePageSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePageFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum =
  | 'resolve'
  | 'name'
  | 'version'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'pluginOptions'
  | 'packageJson'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePluginFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum =
  | 'buildTime'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteBuildMetadataSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteBuildMetadataFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum =
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'gatsbyImageData'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ImageSharpGroupConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ImageSharpFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type WpContentNodeToContentTypeConnectionEdgeFilterInput = {
  node?: InputMaybe<WpContentTypeFilterInput>;
};

export type WpContentTypeFilterInput = {
  archivePath?: InputMaybe<StringQueryOperatorInput>;
  canExport?: InputMaybe<BooleanQueryOperatorInput>;
  connectedTaxonomies?: InputMaybe<WpContentTypeToTaxonomyConnectionFilterInput>;
  contentNodes?: InputMaybe<WpContentTypeToContentNodeConnectionFilterInput>;
  deleteWithUser?: InputMaybe<BooleanQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  excludeFromSearch?: InputMaybe<BooleanQueryOperatorInput>;
  graphqlPluralName?: InputMaybe<StringQueryOperatorInput>;
  graphqlSingleName?: InputMaybe<StringQueryOperatorInput>;
  hasArchive?: InputMaybe<BooleanQueryOperatorInput>;
  hierarchical?: InputMaybe<BooleanQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isFrontPage?: InputMaybe<BooleanQueryOperatorInput>;
  isPostsPage?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  label?: InputMaybe<StringQueryOperatorInput>;
  labels?: InputMaybe<WpPostTypeLabelDetailsFilterInput>;
  menuIcon?: InputMaybe<StringQueryOperatorInput>;
  menuPosition?: InputMaybe<IntQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  public?: InputMaybe<BooleanQueryOperatorInput>;
  publiclyQueryable?: InputMaybe<BooleanQueryOperatorInput>;
  restBase?: InputMaybe<StringQueryOperatorInput>;
  restControllerClass?: InputMaybe<StringQueryOperatorInput>;
  showInAdminBar?: InputMaybe<BooleanQueryOperatorInput>;
  showInGraphql?: InputMaybe<BooleanQueryOperatorInput>;
  showInMenu?: InputMaybe<BooleanQueryOperatorInput>;
  showInNavMenus?: InputMaybe<BooleanQueryOperatorInput>;
  showInRest?: InputMaybe<BooleanQueryOperatorInput>;
  showUi?: InputMaybe<BooleanQueryOperatorInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type WpContentTypeToTaxonomyConnectionFilterInput = {
  nodes?: InputMaybe<WpTaxonomyFilterListInput>;
};

export type WpTaxonomyFilterListInput = {
  elemMatch?: InputMaybe<WpTaxonomyFilterInput>;
};

export type WpTaxonomyFilterInput = {
  archivePath?: InputMaybe<StringQueryOperatorInput>;
  connectedContentTypes?: InputMaybe<WpTaxonomyToContentTypeConnectionFilterInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  graphqlPluralName?: InputMaybe<StringQueryOperatorInput>;
  graphqlSingleName?: InputMaybe<StringQueryOperatorInput>;
  hierarchical?: InputMaybe<BooleanQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  label?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  public?: InputMaybe<BooleanQueryOperatorInput>;
  restBase?: InputMaybe<StringQueryOperatorInput>;
  restControllerClass?: InputMaybe<StringQueryOperatorInput>;
  showCloud?: InputMaybe<BooleanQueryOperatorInput>;
  showInAdminColumn?: InputMaybe<BooleanQueryOperatorInput>;
  showInGraphql?: InputMaybe<BooleanQueryOperatorInput>;
  showInMenu?: InputMaybe<BooleanQueryOperatorInput>;
  showInNavMenus?: InputMaybe<BooleanQueryOperatorInput>;
  showInQuickEdit?: InputMaybe<BooleanQueryOperatorInput>;
  showInRest?: InputMaybe<BooleanQueryOperatorInput>;
  showUi?: InputMaybe<BooleanQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type WpTaxonomyToContentTypeConnectionFilterInput = {
  nodes?: InputMaybe<WpContentTypeFilterListInput>;
};

export type WpContentTypeFilterListInput = {
  elemMatch?: InputMaybe<WpContentTypeFilterInput>;
};

export type WpContentTypeToContentNodeConnectionFilterInput = {
  nodes?: InputMaybe<WpContentNodeFilterListInput>;
};

export type WpContentNodeFilterListInput = {
  elemMatch?: InputMaybe<WpContentNodeFilterInput>;
};

export type WpContentNodeFilterInput = {
  contentType?: InputMaybe<WpContentNodeToContentTypeConnectionEdgeFilterInput>;
  contentTypeName?: InputMaybe<StringQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  date?: InputMaybe<DateQueryOperatorInput>;
  dateGmt?: InputMaybe<DateQueryOperatorInput>;
  desiredSlug?: InputMaybe<StringQueryOperatorInput>;
  enclosure?: InputMaybe<StringQueryOperatorInput>;
  guid?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  lastEditedBy?: InputMaybe<WpContentNodeToEditLastConnectionEdgeFilterInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  modified?: InputMaybe<DateQueryOperatorInput>;
  modifiedGmt?: InputMaybe<DateQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  status?: InputMaybe<StringQueryOperatorInput>;
  template?: InputMaybe<WpContentTemplateFilterInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type WpContentNodeToEditLastConnectionEdgeFilterInput = {
  node?: InputMaybe<WpUserFilterInput>;
};

export type WpUserFilterInput = {
  avatar?: InputMaybe<WpAvatarFilterInput>;
  capKey?: InputMaybe<StringQueryOperatorInput>;
  capabilities?: InputMaybe<StringQueryOperatorInput>;
  comments?: InputMaybe<WpUserToCommentConnectionFilterInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  email?: InputMaybe<StringQueryOperatorInput>;
  extraCapabilities?: InputMaybe<StringQueryOperatorInput>;
  firstName?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  lastName?: InputMaybe<StringQueryOperatorInput>;
  locale?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nicename?: InputMaybe<StringQueryOperatorInput>;
  nickname?: InputMaybe<StringQueryOperatorInput>;
  pages?: InputMaybe<WpUserToPageConnectionFilterInput>;
  posts?: InputMaybe<WpUserToPostConnectionFilterInput>;
  registeredDate?: InputMaybe<StringQueryOperatorInput>;
  roles?: InputMaybe<WpUserToUserRoleConnectionFilterInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  username?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type WpAvatarFilterInput = {
  default?: InputMaybe<StringQueryOperatorInput>;
  extraAttr?: InputMaybe<StringQueryOperatorInput>;
  forceDefault?: InputMaybe<BooleanQueryOperatorInput>;
  foundAvatar?: InputMaybe<BooleanQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  rating?: InputMaybe<StringQueryOperatorInput>;
  scheme?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
};

export type WpUserToCommentConnectionFilterInput = {
  nodes?: InputMaybe<WpCommentFilterListInput>;
};

export type WpCommentFilterListInput = {
  elemMatch?: InputMaybe<WpCommentFilterInput>;
};

export type WpCommentFilterInput = {
  agent?: InputMaybe<StringQueryOperatorInput>;
  approved?: InputMaybe<BooleanQueryOperatorInput>;
  author?: InputMaybe<WpCommentToCommenterConnectionEdgeFilterInput>;
  authorIp?: InputMaybe<StringQueryOperatorInput>;
  commentedOn?: InputMaybe<WpCommentToContentNodeConnectionEdgeFilterInput>;
  content?: InputMaybe<StringQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  date?: InputMaybe<DateQueryOperatorInput>;
  dateGmt?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  karma?: InputMaybe<IntQueryOperatorInput>;
  wpParent?: InputMaybe<WpCommentToParentCommentConnectionEdgeFilterInput>;
  parentDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  parentId?: InputMaybe<IdQueryOperatorInput>;
  replies?: InputMaybe<WpCommentToCommentConnectionFilterInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type WpCommentToCommenterConnectionEdgeFilterInput = {
  node?: InputMaybe<WpCommenterFilterInput>;
};

export type WpCommenterFilterInput = {
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  email?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<IdQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};

export type IdQueryOperatorInput = {
  eq?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type WpCommentToContentNodeConnectionEdgeFilterInput = {
  node?: InputMaybe<WpContentNodeFilterInput>;
};

export type WpCommentToParentCommentConnectionEdgeFilterInput = {
  node?: InputMaybe<WpCommentFilterInput>;
};

export type WpCommentToCommentConnectionFilterInput = {
  nodes?: InputMaybe<WpCommentFilterListInput>;
};

export type WpUserToPageConnectionFilterInput = {
  nodes?: InputMaybe<WpPageFilterListInput>;
};

export type WpPageFilterListInput = {
  elemMatch?: InputMaybe<WpPageFilterInput>;
};

export type WpPageFilterInput = {
  ancestors?: InputMaybe<WpHierarchicalContentNodeToContentNodeAncestorsConnectionFilterInput>;
  author?: InputMaybe<WpNodeWithAuthorToUserConnectionEdgeFilterInput>;
  authorDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  authorId?: InputMaybe<IdQueryOperatorInput>;
  wpChildren?: InputMaybe<WpHierarchicalContentNodeToContentNodeChildrenConnectionFilterInput>;
  commentCount?: InputMaybe<IntQueryOperatorInput>;
  commentStatus?: InputMaybe<StringQueryOperatorInput>;
  comments?: InputMaybe<WpPageToCommentConnectionFilterInput>;
  content?: InputMaybe<StringQueryOperatorInput>;
  contentType?: InputMaybe<WpContentNodeToContentTypeConnectionEdgeFilterInput>;
  contentTypeName?: InputMaybe<StringQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  date?: InputMaybe<DateQueryOperatorInput>;
  dateGmt?: InputMaybe<DateQueryOperatorInput>;
  desiredSlug?: InputMaybe<StringQueryOperatorInput>;
  enclosure?: InputMaybe<StringQueryOperatorInput>;
  featuredImage?: InputMaybe<WpNodeWithFeaturedImageToMediaItemConnectionEdgeFilterInput>;
  featuredImageDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  featuredImageId?: InputMaybe<IdQueryOperatorInput>;
  guid?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isFrontPage?: InputMaybe<BooleanQueryOperatorInput>;
  isPostsPage?: InputMaybe<BooleanQueryOperatorInput>;
  isPrivacyPage?: InputMaybe<BooleanQueryOperatorInput>;
  isRevision?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  language?: InputMaybe<WpLanguageFilterInput>;
  lastEditedBy?: InputMaybe<WpContentNodeToEditLastConnectionEdgeFilterInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  menuOrder?: InputMaybe<IntQueryOperatorInput>;
  modified?: InputMaybe<DateQueryOperatorInput>;
  modifiedGmt?: InputMaybe<DateQueryOperatorInput>;
  wpParent?: InputMaybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdgeFilterInput>;
  parentDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  parentId?: InputMaybe<IdQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  status?: InputMaybe<StringQueryOperatorInput>;
  template?: InputMaybe<WpContentTemplateFilterInput>;
  terms?: InputMaybe<WpPageToTermNodeConnectionFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  translations?: InputMaybe<WpPageFilterListInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type WpHierarchicalContentNodeToContentNodeAncestorsConnectionFilterInput = {
  nodes?: InputMaybe<WpContentNodeFilterListInput>;
};

export type WpNodeWithAuthorToUserConnectionEdgeFilterInput = {
  node?: InputMaybe<WpUserFilterInput>;
};

export type WpHierarchicalContentNodeToContentNodeChildrenConnectionFilterInput = {
  nodes?: InputMaybe<WpContentNodeFilterListInput>;
};

export type WpPageToCommentConnectionFilterInput = {
  nodes?: InputMaybe<WpCommentFilterListInput>;
};

export type WpNodeWithFeaturedImageToMediaItemConnectionEdgeFilterInput = {
  node?: InputMaybe<WpMediaItemFilterInput>;
};

export type WpMediaItemFilterInput = {
  altText?: InputMaybe<StringQueryOperatorInput>;
  ancestors?: InputMaybe<WpHierarchicalContentNodeToContentNodeAncestorsConnectionFilterInput>;
  author?: InputMaybe<WpNodeWithAuthorToUserConnectionEdgeFilterInput>;
  authorDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  authorId?: InputMaybe<IdQueryOperatorInput>;
  caption?: InputMaybe<StringQueryOperatorInput>;
  wpChildren?: InputMaybe<WpHierarchicalContentNodeToContentNodeChildrenConnectionFilterInput>;
  commentCount?: InputMaybe<IntQueryOperatorInput>;
  commentStatus?: InputMaybe<StringQueryOperatorInput>;
  comments?: InputMaybe<WpMediaItemToCommentConnectionFilterInput>;
  contentType?: InputMaybe<WpContentNodeToContentTypeConnectionEdgeFilterInput>;
  contentTypeName?: InputMaybe<StringQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  date?: InputMaybe<DateQueryOperatorInput>;
  dateGmt?: InputMaybe<DateQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  desiredSlug?: InputMaybe<StringQueryOperatorInput>;
  enclosure?: InputMaybe<StringQueryOperatorInput>;
  fileSize?: InputMaybe<IntQueryOperatorInput>;
  guid?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  lastEditedBy?: InputMaybe<WpContentNodeToEditLastConnectionEdgeFilterInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  mediaDetails?: InputMaybe<WpMediaDetailsFilterInput>;
  mediaItemUrl?: InputMaybe<StringQueryOperatorInput>;
  mediaType?: InputMaybe<StringQueryOperatorInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  modified?: InputMaybe<DateQueryOperatorInput>;
  modifiedGmt?: InputMaybe<DateQueryOperatorInput>;
  wpParent?: InputMaybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdgeFilterInput>;
  parentDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  parentId?: InputMaybe<IdQueryOperatorInput>;
  sizes?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  sourceUrl?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  status?: InputMaybe<StringQueryOperatorInput>;
  template?: InputMaybe<WpContentTemplateFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  remoteFile?: InputMaybe<FileFilterInput>;
  localFile?: InputMaybe<FileFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  filename?: InputMaybe<StringQueryOperatorInput>;
  filesize?: InputMaybe<IntQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  publicUrl?: InputMaybe<StringQueryOperatorInput>;
  resize?: InputMaybe<RemoteFileResizeFilterInput>;
  gatsbyImage?: InputMaybe<JsonQueryOperatorInput>;
};

export type WpMediaItemToCommentConnectionFilterInput = {
  nodes?: InputMaybe<WpCommentFilterListInput>;
};

export type WpMediaDetailsFilterInput = {
  file?: InputMaybe<StringQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  meta?: InputMaybe<WpMediaItemMetaFilterInput>;
  sizes?: InputMaybe<WpMediaSizeFilterListInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
};

export type WpMediaItemMetaFilterInput = {
  aperture?: InputMaybe<FloatQueryOperatorInput>;
  camera?: InputMaybe<StringQueryOperatorInput>;
  caption?: InputMaybe<StringQueryOperatorInput>;
  copyright?: InputMaybe<StringQueryOperatorInput>;
  createdTimestamp?: InputMaybe<IntQueryOperatorInput>;
  credit?: InputMaybe<StringQueryOperatorInput>;
  focalLength?: InputMaybe<FloatQueryOperatorInput>;
  iso?: InputMaybe<IntQueryOperatorInput>;
  keywords?: InputMaybe<StringQueryOperatorInput>;
  orientation?: InputMaybe<StringQueryOperatorInput>;
  shutterSpeed?: InputMaybe<FloatQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};

export type WpMediaSizeFilterListInput = {
  elemMatch?: InputMaybe<WpMediaSizeFilterInput>;
};

export type WpMediaSizeFilterInput = {
  file?: InputMaybe<StringQueryOperatorInput>;
  fileSize?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<StringQueryOperatorInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  sourceUrl?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<StringQueryOperatorInput>;
};

export type WpHierarchicalContentNodeToParentContentNodeConnectionEdgeFilterInput = {
  node?: InputMaybe<WpContentNodeFilterInput>;
};

export type WpContentTemplateFilterInput = {
  templateName?: InputMaybe<StringQueryOperatorInput>;
};

export type RemoteFileResizeFilterInput = {
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
};

export type WpLanguageFilterInput = {
  code?: InputMaybe<WpLanguageCodeEnumQueryOperatorInput>;
  homeUrl?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<IdQueryOperatorInput>;
  locale?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
};

export type WpLanguageCodeEnumQueryOperatorInput = {
  eq?: InputMaybe<WpLanguageCodeEnum>;
  ne?: InputMaybe<WpLanguageCodeEnum>;
  in?: InputMaybe<Array<InputMaybe<WpLanguageCodeEnum>>>;
  nin?: InputMaybe<Array<InputMaybe<WpLanguageCodeEnum>>>;
};

export type WpPageToTermNodeConnectionFilterInput = {
  nodes?: InputMaybe<WpTermNodeFilterListInput>;
};

export type WpTermNodeFilterListInput = {
  elemMatch?: InputMaybe<WpTermNodeFilterInput>;
};

export type WpTermNodeFilterInput = {
  count?: InputMaybe<IntQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  taxonomyName?: InputMaybe<StringQueryOperatorInput>;
  termGroupId?: InputMaybe<IntQueryOperatorInput>;
  termTaxonomyId?: InputMaybe<IntQueryOperatorInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type WpUserToPostConnectionFilterInput = {
  nodes?: InputMaybe<WpPostFilterListInput>;
};

export type WpPostFilterListInput = {
  elemMatch?: InputMaybe<WpPostFilterInput>;
};

export type WpPostFilterInput = {
  author?: InputMaybe<WpNodeWithAuthorToUserConnectionEdgeFilterInput>;
  authorDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  authorId?: InputMaybe<IdQueryOperatorInput>;
  categories?: InputMaybe<WpPostToCategoryConnectionFilterInput>;
  commentCount?: InputMaybe<IntQueryOperatorInput>;
  commentStatus?: InputMaybe<StringQueryOperatorInput>;
  comments?: InputMaybe<WpPostToCommentConnectionFilterInput>;
  content?: InputMaybe<StringQueryOperatorInput>;
  contentType?: InputMaybe<WpContentNodeToContentTypeConnectionEdgeFilterInput>;
  contentTypeName?: InputMaybe<StringQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  date?: InputMaybe<DateQueryOperatorInput>;
  dateGmt?: InputMaybe<DateQueryOperatorInput>;
  desiredSlug?: InputMaybe<StringQueryOperatorInput>;
  enclosure?: InputMaybe<StringQueryOperatorInput>;
  excerpt?: InputMaybe<StringQueryOperatorInput>;
  featuredImage?: InputMaybe<WpNodeWithFeaturedImageToMediaItemConnectionEdgeFilterInput>;
  featuredImageDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  featuredImageId?: InputMaybe<IdQueryOperatorInput>;
  guid?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isRevision?: InputMaybe<BooleanQueryOperatorInput>;
  isSticky?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  language?: InputMaybe<WpLanguageFilterInput>;
  lastEditedBy?: InputMaybe<WpContentNodeToEditLastConnectionEdgeFilterInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  modified?: InputMaybe<DateQueryOperatorInput>;
  modifiedGmt?: InputMaybe<DateQueryOperatorInput>;
  pingStatus?: InputMaybe<StringQueryOperatorInput>;
  pinged?: InputMaybe<StringQueryOperatorInput>;
  postFormats?: InputMaybe<WpPostToPostFormatConnectionFilterInput>;
  realization?: InputMaybe<WpPost_RealizationFilterInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  status?: InputMaybe<StringQueryOperatorInput>;
  tags?: InputMaybe<WpPostToTagConnectionFilterInput>;
  template?: InputMaybe<WpContentTemplateFilterInput>;
  terms?: InputMaybe<WpPostToTermNodeConnectionFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  toPing?: InputMaybe<StringQueryOperatorInput>;
  translations?: InputMaybe<WpPostFilterListInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type WpPostToCategoryConnectionFilterInput = {
  nodes?: InputMaybe<WpCategoryFilterListInput>;
};

export type WpCategoryFilterListInput = {
  elemMatch?: InputMaybe<WpCategoryFilterInput>;
};

export type WpCategoryFilterInput = {
  ancestors?: InputMaybe<WpCategoryToAncestorsCategoryConnectionFilterInput>;
  wpChildren?: InputMaybe<WpCategoryToCategoryConnectionFilterInput>;
  contentNodes?: InputMaybe<WpCategoryToContentNodeConnectionFilterInput>;
  count?: InputMaybe<IntQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  language?: InputMaybe<WpLanguageFilterInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  wpParent?: InputMaybe<WpCategoryToParentCategoryConnectionEdgeFilterInput>;
  parentDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  parentId?: InputMaybe<IdQueryOperatorInput>;
  posts?: InputMaybe<WpCategoryToPostConnectionFilterInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  taxonomy?: InputMaybe<WpCategoryToTaxonomyConnectionEdgeFilterInput>;
  taxonomyName?: InputMaybe<StringQueryOperatorInput>;
  termGroupId?: InputMaybe<IntQueryOperatorInput>;
  termTaxonomyId?: InputMaybe<IntQueryOperatorInput>;
  translations?: InputMaybe<WpCategoryFilterListInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type WpCategoryToAncestorsCategoryConnectionFilterInput = {
  nodes?: InputMaybe<WpCategoryFilterListInput>;
};

export type WpCategoryToCategoryConnectionFilterInput = {
  nodes?: InputMaybe<WpCategoryFilterListInput>;
};

export type WpCategoryToContentNodeConnectionFilterInput = {
  nodes?: InputMaybe<WpContentNodeFilterListInput>;
};

export type WpCategoryToParentCategoryConnectionEdgeFilterInput = {
  node?: InputMaybe<WpCategoryFilterInput>;
};

export type WpCategoryToPostConnectionFilterInput = {
  nodes?: InputMaybe<WpPostFilterListInput>;
};

export type WpCategoryToTaxonomyConnectionEdgeFilterInput = {
  node?: InputMaybe<WpTaxonomyFilterInput>;
};

export type WpPostToCommentConnectionFilterInput = {
  nodes?: InputMaybe<WpCommentFilterListInput>;
};

export type WpPostToPostFormatConnectionFilterInput = {
  nodes?: InputMaybe<WpPostFormatFilterListInput>;
};

export type WpPostFormatFilterListInput = {
  elemMatch?: InputMaybe<WpPostFormatFilterInput>;
};

export type WpPostFormatFilterInput = {
  contentNodes?: InputMaybe<WpPostFormatToContentNodeConnectionFilterInput>;
  count?: InputMaybe<IntQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  posts?: InputMaybe<WpPostFormatToPostConnectionFilterInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  taxonomy?: InputMaybe<WpPostFormatToTaxonomyConnectionEdgeFilterInput>;
  taxonomyName?: InputMaybe<StringQueryOperatorInput>;
  termGroupId?: InputMaybe<IntQueryOperatorInput>;
  termTaxonomyId?: InputMaybe<IntQueryOperatorInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type WpPostFormatToContentNodeConnectionFilterInput = {
  nodes?: InputMaybe<WpContentNodeFilterListInput>;
};

export type WpPostFormatToPostConnectionFilterInput = {
  nodes?: InputMaybe<WpPostFilterListInput>;
};

export type WpPostFormatToTaxonomyConnectionEdgeFilterInput = {
  node?: InputMaybe<WpTaxonomyFilterInput>;
};

export type WpPost_RealizationFilterInput = {
  dateRealization?: InputMaybe<FloatQueryOperatorInput>;
  describedTitle?: InputMaybe<StringQueryOperatorInput>;
  fieldGroupName?: InputMaybe<StringQueryOperatorInput>;
  image?: InputMaybe<WpMediaItemFilterInput>;
  location?: InputMaybe<StringQueryOperatorInput>;
  text?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};

export type WpPostToTagConnectionFilterInput = {
  nodes?: InputMaybe<WpTagFilterListInput>;
};

export type WpTagFilterListInput = {
  elemMatch?: InputMaybe<WpTagFilterInput>;
};

export type WpTagFilterInput = {
  contentNodes?: InputMaybe<WpTagToContentNodeConnectionFilterInput>;
  count?: InputMaybe<IntQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  language?: InputMaybe<WpLanguageFilterInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  posts?: InputMaybe<WpTagToPostConnectionFilterInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  taxonomy?: InputMaybe<WpTagToTaxonomyConnectionEdgeFilterInput>;
  taxonomyName?: InputMaybe<StringQueryOperatorInput>;
  termGroupId?: InputMaybe<IntQueryOperatorInput>;
  termTaxonomyId?: InputMaybe<IntQueryOperatorInput>;
  translations?: InputMaybe<WpTagFilterListInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type WpTagToContentNodeConnectionFilterInput = {
  nodes?: InputMaybe<WpContentNodeFilterListInput>;
};

export type WpTagToPostConnectionFilterInput = {
  nodes?: InputMaybe<WpPostFilterListInput>;
};

export type WpTagToTaxonomyConnectionEdgeFilterInput = {
  node?: InputMaybe<WpTaxonomyFilterInput>;
};

export type WpPostToTermNodeConnectionFilterInput = {
  nodes?: InputMaybe<WpTermNodeFilterListInput>;
};

export type WpUserToUserRoleConnectionFilterInput = {
  nodes?: InputMaybe<WpUserRoleFilterListInput>;
};

export type WpUserRoleFilterListInput = {
  elemMatch?: InputMaybe<WpUserRoleFilterInput>;
};

export type WpUserRoleFilterInput = {
  capabilities?: InputMaybe<StringQueryOperatorInput>;
  displayName?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type WpPostTypeLabelDetailsFilterInput = {
  addNew?: InputMaybe<StringQueryOperatorInput>;
  addNewItem?: InputMaybe<StringQueryOperatorInput>;
  allItems?: InputMaybe<StringQueryOperatorInput>;
  archives?: InputMaybe<StringQueryOperatorInput>;
  attributes?: InputMaybe<StringQueryOperatorInput>;
  editItem?: InputMaybe<StringQueryOperatorInput>;
  featuredImage?: InputMaybe<StringQueryOperatorInput>;
  filterItemsList?: InputMaybe<StringQueryOperatorInput>;
  insertIntoItem?: InputMaybe<StringQueryOperatorInput>;
  itemsList?: InputMaybe<StringQueryOperatorInput>;
  itemsListNavigation?: InputMaybe<StringQueryOperatorInput>;
  menuName?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  newItem?: InputMaybe<StringQueryOperatorInput>;
  notFound?: InputMaybe<StringQueryOperatorInput>;
  notFoundInTrash?: InputMaybe<StringQueryOperatorInput>;
  parentItemColon?: InputMaybe<StringQueryOperatorInput>;
  removeFeaturedImage?: InputMaybe<StringQueryOperatorInput>;
  searchItems?: InputMaybe<StringQueryOperatorInput>;
  setFeaturedImage?: InputMaybe<StringQueryOperatorInput>;
  singularName?: InputMaybe<StringQueryOperatorInput>;
  uploadedToThisItem?: InputMaybe<StringQueryOperatorInput>;
  useFeaturedImage?: InputMaybe<StringQueryOperatorInput>;
  viewItem?: InputMaybe<StringQueryOperatorInput>;
  viewItems?: InputMaybe<StringQueryOperatorInput>;
};

export type WpContentNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpContentNodeEdge>;
  nodes: Array<WpContentNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<WpContentNodeGroupConnection>;
};


export type WpContentNodeConnectionDistinctArgs = {
  field: WpContentNodeFieldsEnum;
};


export type WpContentNodeConnectionMaxArgs = {
  field: WpContentNodeFieldsEnum;
};


export type WpContentNodeConnectionMinArgs = {
  field: WpContentNodeFieldsEnum;
};


export type WpContentNodeConnectionSumArgs = {
  field: WpContentNodeFieldsEnum;
};


export type WpContentNodeConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: WpContentNodeFieldsEnum;
};

export type WpContentNodeEdge = {
  next?: Maybe<WpContentNode>;
  node: WpContentNode;
  previous?: Maybe<WpContentNode>;
};

export type WpContentNodeFieldsEnum =
  | 'contentType___node___archivePath'
  | 'contentType___node___canExport'
  | 'contentType___node___connectedTaxonomies___nodes'
  | 'contentType___node___contentNodes___nodes'
  | 'contentType___node___deleteWithUser'
  | 'contentType___node___description'
  | 'contentType___node___excludeFromSearch'
  | 'contentType___node___graphqlPluralName'
  | 'contentType___node___graphqlSingleName'
  | 'contentType___node___hasArchive'
  | 'contentType___node___hierarchical'
  | 'contentType___node___id'
  | 'contentType___node___isContentNode'
  | 'contentType___node___isFrontPage'
  | 'contentType___node___isPostsPage'
  | 'contentType___node___isTermNode'
  | 'contentType___node___label'
  | 'contentType___node___labels___addNew'
  | 'contentType___node___labels___addNewItem'
  | 'contentType___node___labels___allItems'
  | 'contentType___node___labels___archives'
  | 'contentType___node___labels___attributes'
  | 'contentType___node___labels___editItem'
  | 'contentType___node___labels___featuredImage'
  | 'contentType___node___labels___filterItemsList'
  | 'contentType___node___labels___insertIntoItem'
  | 'contentType___node___labels___itemsList'
  | 'contentType___node___labels___itemsListNavigation'
  | 'contentType___node___labels___menuName'
  | 'contentType___node___labels___name'
  | 'contentType___node___labels___newItem'
  | 'contentType___node___labels___notFound'
  | 'contentType___node___labels___notFoundInTrash'
  | 'contentType___node___labels___parentItemColon'
  | 'contentType___node___labels___removeFeaturedImage'
  | 'contentType___node___labels___searchItems'
  | 'contentType___node___labels___setFeaturedImage'
  | 'contentType___node___labels___singularName'
  | 'contentType___node___labels___uploadedToThisItem'
  | 'contentType___node___labels___useFeaturedImage'
  | 'contentType___node___labels___viewItem'
  | 'contentType___node___labels___viewItems'
  | 'contentType___node___menuIcon'
  | 'contentType___node___menuPosition'
  | 'contentType___node___name'
  | 'contentType___node___public'
  | 'contentType___node___publiclyQueryable'
  | 'contentType___node___restBase'
  | 'contentType___node___restControllerClass'
  | 'contentType___node___showInAdminBar'
  | 'contentType___node___showInGraphql'
  | 'contentType___node___showInMenu'
  | 'contentType___node___showInNavMenus'
  | 'contentType___node___showInRest'
  | 'contentType___node___showUi'
  | 'contentType___node___uri'
  | 'contentType___node___nodeType'
  | 'contentType___node___parent___id'
  | 'contentType___node___parent___children'
  | 'contentType___node___children'
  | 'contentType___node___children___id'
  | 'contentType___node___children___children'
  | 'contentType___node___internal___content'
  | 'contentType___node___internal___contentDigest'
  | 'contentType___node___internal___description'
  | 'contentType___node___internal___fieldOwners'
  | 'contentType___node___internal___ignoreType'
  | 'contentType___node___internal___mediaType'
  | 'contentType___node___internal___owner'
  | 'contentType___node___internal___type'
  | 'contentTypeName'
  | 'databaseId'
  | 'date'
  | 'dateGmt'
  | 'desiredSlug'
  | 'enclosure'
  | 'guid'
  | 'id'
  | 'isContentNode'
  | 'isTermNode'
  | 'lastEditedBy___node___avatar___default'
  | 'lastEditedBy___node___avatar___extraAttr'
  | 'lastEditedBy___node___avatar___forceDefault'
  | 'lastEditedBy___node___avatar___foundAvatar'
  | 'lastEditedBy___node___avatar___height'
  | 'lastEditedBy___node___avatar___rating'
  | 'lastEditedBy___node___avatar___scheme'
  | 'lastEditedBy___node___avatar___size'
  | 'lastEditedBy___node___avatar___url'
  | 'lastEditedBy___node___avatar___width'
  | 'lastEditedBy___node___capKey'
  | 'lastEditedBy___node___capabilities'
  | 'lastEditedBy___node___comments___nodes'
  | 'lastEditedBy___node___databaseId'
  | 'lastEditedBy___node___description'
  | 'lastEditedBy___node___email'
  | 'lastEditedBy___node___extraCapabilities'
  | 'lastEditedBy___node___firstName'
  | 'lastEditedBy___node___id'
  | 'lastEditedBy___node___isContentNode'
  | 'lastEditedBy___node___isTermNode'
  | 'lastEditedBy___node___lastName'
  | 'lastEditedBy___node___locale'
  | 'lastEditedBy___node___name'
  | 'lastEditedBy___node___nicename'
  | 'lastEditedBy___node___nickname'
  | 'lastEditedBy___node___pages___nodes'
  | 'lastEditedBy___node___posts___nodes'
  | 'lastEditedBy___node___registeredDate'
  | 'lastEditedBy___node___roles___nodes'
  | 'lastEditedBy___node___slug'
  | 'lastEditedBy___node___uri'
  | 'lastEditedBy___node___url'
  | 'lastEditedBy___node___username'
  | 'lastEditedBy___node___nodeType'
  | 'lastEditedBy___node___parent___id'
  | 'lastEditedBy___node___parent___children'
  | 'lastEditedBy___node___children'
  | 'lastEditedBy___node___children___id'
  | 'lastEditedBy___node___children___children'
  | 'lastEditedBy___node___internal___content'
  | 'lastEditedBy___node___internal___contentDigest'
  | 'lastEditedBy___node___internal___description'
  | 'lastEditedBy___node___internal___fieldOwners'
  | 'lastEditedBy___node___internal___ignoreType'
  | 'lastEditedBy___node___internal___mediaType'
  | 'lastEditedBy___node___internal___owner'
  | 'lastEditedBy___node___internal___type'
  | 'link'
  | 'modified'
  | 'modifiedGmt'
  | 'slug'
  | 'status'
  | 'template___templateName'
  | 'uri'
  | 'nodeType'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type WpContentNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpContentNodeEdge>;
  nodes: Array<WpContentNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<WpContentNodeGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type WpContentNodeGroupConnectionDistinctArgs = {
  field: WpContentNodeFieldsEnum;
};


export type WpContentNodeGroupConnectionMaxArgs = {
  field: WpContentNodeFieldsEnum;
};


export type WpContentNodeGroupConnectionMinArgs = {
  field: WpContentNodeFieldsEnum;
};


export type WpContentNodeGroupConnectionSumArgs = {
  field: WpContentNodeFieldsEnum;
};


export type WpContentNodeGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: WpContentNodeFieldsEnum;
};

export type WpContentNodeSortInput = {
  fields?: InputMaybe<Array<InputMaybe<WpContentNodeFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type WpContentTypeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpContentTypeEdge>;
  nodes: Array<WpContentType>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<WpContentTypeGroupConnection>;
};


export type WpContentTypeConnectionDistinctArgs = {
  field: WpContentTypeFieldsEnum;
};


export type WpContentTypeConnectionMaxArgs = {
  field: WpContentTypeFieldsEnum;
};


export type WpContentTypeConnectionMinArgs = {
  field: WpContentTypeFieldsEnum;
};


export type WpContentTypeConnectionSumArgs = {
  field: WpContentTypeFieldsEnum;
};


export type WpContentTypeConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: WpContentTypeFieldsEnum;
};

export type WpContentTypeEdge = {
  next?: Maybe<WpContentType>;
  node: WpContentType;
  previous?: Maybe<WpContentType>;
};

export type WpContentTypeFieldsEnum =
  | 'archivePath'
  | 'canExport'
  | 'connectedTaxonomies___nodes'
  | 'connectedTaxonomies___nodes___archivePath'
  | 'connectedTaxonomies___nodes___connectedContentTypes___nodes'
  | 'connectedTaxonomies___nodes___description'
  | 'connectedTaxonomies___nodes___graphqlPluralName'
  | 'connectedTaxonomies___nodes___graphqlSingleName'
  | 'connectedTaxonomies___nodes___hierarchical'
  | 'connectedTaxonomies___nodes___id'
  | 'connectedTaxonomies___nodes___label'
  | 'connectedTaxonomies___nodes___name'
  | 'connectedTaxonomies___nodes___public'
  | 'connectedTaxonomies___nodes___restBase'
  | 'connectedTaxonomies___nodes___restControllerClass'
  | 'connectedTaxonomies___nodes___showCloud'
  | 'connectedTaxonomies___nodes___showInAdminColumn'
  | 'connectedTaxonomies___nodes___showInGraphql'
  | 'connectedTaxonomies___nodes___showInMenu'
  | 'connectedTaxonomies___nodes___showInNavMenus'
  | 'connectedTaxonomies___nodes___showInQuickEdit'
  | 'connectedTaxonomies___nodes___showInRest'
  | 'connectedTaxonomies___nodes___showUi'
  | 'connectedTaxonomies___nodes___nodeType'
  | 'connectedTaxonomies___nodes___parent___id'
  | 'connectedTaxonomies___nodes___parent___children'
  | 'connectedTaxonomies___nodes___children'
  | 'connectedTaxonomies___nodes___children___id'
  | 'connectedTaxonomies___nodes___children___children'
  | 'connectedTaxonomies___nodes___internal___content'
  | 'connectedTaxonomies___nodes___internal___contentDigest'
  | 'connectedTaxonomies___nodes___internal___description'
  | 'connectedTaxonomies___nodes___internal___fieldOwners'
  | 'connectedTaxonomies___nodes___internal___ignoreType'
  | 'connectedTaxonomies___nodes___internal___mediaType'
  | 'connectedTaxonomies___nodes___internal___owner'
  | 'connectedTaxonomies___nodes___internal___type'
  | 'contentNodes___nodes'
  | 'contentNodes___nodes___contentTypeName'
  | 'contentNodes___nodes___databaseId'
  | 'contentNodes___nodes___date'
  | 'contentNodes___nodes___dateGmt'
  | 'contentNodes___nodes___desiredSlug'
  | 'contentNodes___nodes___enclosure'
  | 'contentNodes___nodes___guid'
  | 'contentNodes___nodes___id'
  | 'contentNodes___nodes___isContentNode'
  | 'contentNodes___nodes___isTermNode'
  | 'contentNodes___nodes___link'
  | 'contentNodes___nodes___modified'
  | 'contentNodes___nodes___modifiedGmt'
  | 'contentNodes___nodes___slug'
  | 'contentNodes___nodes___status'
  | 'contentNodes___nodes___template___templateName'
  | 'contentNodes___nodes___uri'
  | 'contentNodes___nodes___nodeType'
  | 'contentNodes___nodes___parent___id'
  | 'contentNodes___nodes___parent___children'
  | 'contentNodes___nodes___children'
  | 'contentNodes___nodes___children___id'
  | 'contentNodes___nodes___children___children'
  | 'contentNodes___nodes___internal___content'
  | 'contentNodes___nodes___internal___contentDigest'
  | 'contentNodes___nodes___internal___description'
  | 'contentNodes___nodes___internal___fieldOwners'
  | 'contentNodes___nodes___internal___ignoreType'
  | 'contentNodes___nodes___internal___mediaType'
  | 'contentNodes___nodes___internal___owner'
  | 'contentNodes___nodes___internal___type'
  | 'deleteWithUser'
  | 'description'
  | 'excludeFromSearch'
  | 'graphqlPluralName'
  | 'graphqlSingleName'
  | 'hasArchive'
  | 'hierarchical'
  | 'id'
  | 'isContentNode'
  | 'isFrontPage'
  | 'isPostsPage'
  | 'isTermNode'
  | 'label'
  | 'labels___addNew'
  | 'labels___addNewItem'
  | 'labels___allItems'
  | 'labels___archives'
  | 'labels___attributes'
  | 'labels___editItem'
  | 'labels___featuredImage'
  | 'labels___filterItemsList'
  | 'labels___insertIntoItem'
  | 'labels___itemsList'
  | 'labels___itemsListNavigation'
  | 'labels___menuName'
  | 'labels___name'
  | 'labels___newItem'
  | 'labels___notFound'
  | 'labels___notFoundInTrash'
  | 'labels___parentItemColon'
  | 'labels___removeFeaturedImage'
  | 'labels___searchItems'
  | 'labels___setFeaturedImage'
  | 'labels___singularName'
  | 'labels___uploadedToThisItem'
  | 'labels___useFeaturedImage'
  | 'labels___viewItem'
  | 'labels___viewItems'
  | 'menuIcon'
  | 'menuPosition'
  | 'name'
  | 'public'
  | 'publiclyQueryable'
  | 'restBase'
  | 'restControllerClass'
  | 'showInAdminBar'
  | 'showInGraphql'
  | 'showInMenu'
  | 'showInNavMenus'
  | 'showInRest'
  | 'showUi'
  | 'uri'
  | 'nodeType'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type WpContentTypeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpContentTypeEdge>;
  nodes: Array<WpContentType>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<WpContentTypeGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type WpContentTypeGroupConnectionDistinctArgs = {
  field: WpContentTypeFieldsEnum;
};


export type WpContentTypeGroupConnectionMaxArgs = {
  field: WpContentTypeFieldsEnum;
};


export type WpContentTypeGroupConnectionMinArgs = {
  field: WpContentTypeFieldsEnum;
};


export type WpContentTypeGroupConnectionSumArgs = {
  field: WpContentTypeFieldsEnum;
};


export type WpContentTypeGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: WpContentTypeFieldsEnum;
};

export type WpContentTypeSortInput = {
  fields?: InputMaybe<Array<InputMaybe<WpContentTypeFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type WpTaxonomyConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpTaxonomyEdge>;
  nodes: Array<WpTaxonomy>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<WpTaxonomyGroupConnection>;
};


export type WpTaxonomyConnectionDistinctArgs = {
  field: WpTaxonomyFieldsEnum;
};


export type WpTaxonomyConnectionMaxArgs = {
  field: WpTaxonomyFieldsEnum;
};


export type WpTaxonomyConnectionMinArgs = {
  field: WpTaxonomyFieldsEnum;
};


export type WpTaxonomyConnectionSumArgs = {
  field: WpTaxonomyFieldsEnum;
};


export type WpTaxonomyConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: WpTaxonomyFieldsEnum;
};

export type WpTaxonomyEdge = {
  next?: Maybe<WpTaxonomy>;
  node: WpTaxonomy;
  previous?: Maybe<WpTaxonomy>;
};

export type WpTaxonomyFieldsEnum =
  | 'archivePath'
  | 'connectedContentTypes___nodes'
  | 'connectedContentTypes___nodes___archivePath'
  | 'connectedContentTypes___nodes___canExport'
  | 'connectedContentTypes___nodes___connectedTaxonomies___nodes'
  | 'connectedContentTypes___nodes___contentNodes___nodes'
  | 'connectedContentTypes___nodes___deleteWithUser'
  | 'connectedContentTypes___nodes___description'
  | 'connectedContentTypes___nodes___excludeFromSearch'
  | 'connectedContentTypes___nodes___graphqlPluralName'
  | 'connectedContentTypes___nodes___graphqlSingleName'
  | 'connectedContentTypes___nodes___hasArchive'
  | 'connectedContentTypes___nodes___hierarchical'
  | 'connectedContentTypes___nodes___id'
  | 'connectedContentTypes___nodes___isContentNode'
  | 'connectedContentTypes___nodes___isFrontPage'
  | 'connectedContentTypes___nodes___isPostsPage'
  | 'connectedContentTypes___nodes___isTermNode'
  | 'connectedContentTypes___nodes___label'
  | 'connectedContentTypes___nodes___labels___addNew'
  | 'connectedContentTypes___nodes___labels___addNewItem'
  | 'connectedContentTypes___nodes___labels___allItems'
  | 'connectedContentTypes___nodes___labels___archives'
  | 'connectedContentTypes___nodes___labels___attributes'
  | 'connectedContentTypes___nodes___labels___editItem'
  | 'connectedContentTypes___nodes___labels___featuredImage'
  | 'connectedContentTypes___nodes___labels___filterItemsList'
  | 'connectedContentTypes___nodes___labels___insertIntoItem'
  | 'connectedContentTypes___nodes___labels___itemsList'
  | 'connectedContentTypes___nodes___labels___itemsListNavigation'
  | 'connectedContentTypes___nodes___labels___menuName'
  | 'connectedContentTypes___nodes___labels___name'
  | 'connectedContentTypes___nodes___labels___newItem'
  | 'connectedContentTypes___nodes___labels___notFound'
  | 'connectedContentTypes___nodes___labels___notFoundInTrash'
  | 'connectedContentTypes___nodes___labels___parentItemColon'
  | 'connectedContentTypes___nodes___labels___removeFeaturedImage'
  | 'connectedContentTypes___nodes___labels___searchItems'
  | 'connectedContentTypes___nodes___labels___setFeaturedImage'
  | 'connectedContentTypes___nodes___labels___singularName'
  | 'connectedContentTypes___nodes___labels___uploadedToThisItem'
  | 'connectedContentTypes___nodes___labels___useFeaturedImage'
  | 'connectedContentTypes___nodes___labels___viewItem'
  | 'connectedContentTypes___nodes___labels___viewItems'
  | 'connectedContentTypes___nodes___menuIcon'
  | 'connectedContentTypes___nodes___menuPosition'
  | 'connectedContentTypes___nodes___name'
  | 'connectedContentTypes___nodes___public'
  | 'connectedContentTypes___nodes___publiclyQueryable'
  | 'connectedContentTypes___nodes___restBase'
  | 'connectedContentTypes___nodes___restControllerClass'
  | 'connectedContentTypes___nodes___showInAdminBar'
  | 'connectedContentTypes___nodes___showInGraphql'
  | 'connectedContentTypes___nodes___showInMenu'
  | 'connectedContentTypes___nodes___showInNavMenus'
  | 'connectedContentTypes___nodes___showInRest'
  | 'connectedContentTypes___nodes___showUi'
  | 'connectedContentTypes___nodes___uri'
  | 'connectedContentTypes___nodes___nodeType'
  | 'connectedContentTypes___nodes___parent___id'
  | 'connectedContentTypes___nodes___parent___children'
  | 'connectedContentTypes___nodes___children'
  | 'connectedContentTypes___nodes___children___id'
  | 'connectedContentTypes___nodes___children___children'
  | 'connectedContentTypes___nodes___internal___content'
  | 'connectedContentTypes___nodes___internal___contentDigest'
  | 'connectedContentTypes___nodes___internal___description'
  | 'connectedContentTypes___nodes___internal___fieldOwners'
  | 'connectedContentTypes___nodes___internal___ignoreType'
  | 'connectedContentTypes___nodes___internal___mediaType'
  | 'connectedContentTypes___nodes___internal___owner'
  | 'connectedContentTypes___nodes___internal___type'
  | 'description'
  | 'graphqlPluralName'
  | 'graphqlSingleName'
  | 'hierarchical'
  | 'id'
  | 'label'
  | 'name'
  | 'public'
  | 'restBase'
  | 'restControllerClass'
  | 'showCloud'
  | 'showInAdminColumn'
  | 'showInGraphql'
  | 'showInMenu'
  | 'showInNavMenus'
  | 'showInQuickEdit'
  | 'showInRest'
  | 'showUi'
  | 'nodeType'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type WpTaxonomyGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpTaxonomyEdge>;
  nodes: Array<WpTaxonomy>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<WpTaxonomyGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type WpTaxonomyGroupConnectionDistinctArgs = {
  field: WpTaxonomyFieldsEnum;
};


export type WpTaxonomyGroupConnectionMaxArgs = {
  field: WpTaxonomyFieldsEnum;
};


export type WpTaxonomyGroupConnectionMinArgs = {
  field: WpTaxonomyFieldsEnum;
};


export type WpTaxonomyGroupConnectionSumArgs = {
  field: WpTaxonomyFieldsEnum;
};


export type WpTaxonomyGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: WpTaxonomyFieldsEnum;
};

export type WpTaxonomySortInput = {
  fields?: InputMaybe<Array<InputMaybe<WpTaxonomyFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type WpUserConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpUserEdge>;
  nodes: Array<WpUser>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<WpUserGroupConnection>;
};


export type WpUserConnectionDistinctArgs = {
  field: WpUserFieldsEnum;
};


export type WpUserConnectionMaxArgs = {
  field: WpUserFieldsEnum;
};


export type WpUserConnectionMinArgs = {
  field: WpUserFieldsEnum;
};


export type WpUserConnectionSumArgs = {
  field: WpUserFieldsEnum;
};


export type WpUserConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: WpUserFieldsEnum;
};

export type WpUserEdge = {
  next?: Maybe<WpUser>;
  node: WpUser;
  previous?: Maybe<WpUser>;
};

export type WpUserFieldsEnum =
  | 'avatar___default'
  | 'avatar___extraAttr'
  | 'avatar___forceDefault'
  | 'avatar___foundAvatar'
  | 'avatar___height'
  | 'avatar___rating'
  | 'avatar___scheme'
  | 'avatar___size'
  | 'avatar___url'
  | 'avatar___width'
  | 'capKey'
  | 'capabilities'
  | 'comments___nodes'
  | 'comments___nodes___agent'
  | 'comments___nodes___approved'
  | 'comments___nodes___authorIp'
  | 'comments___nodes___content'
  | 'comments___nodes___databaseId'
  | 'comments___nodes___date'
  | 'comments___nodes___dateGmt'
  | 'comments___nodes___id'
  | 'comments___nodes___karma'
  | 'comments___nodes___parentDatabaseId'
  | 'comments___nodes___parentId'
  | 'comments___nodes___replies___nodes'
  | 'comments___nodes___type'
  | 'comments___nodes___nodeType'
  | 'comments___nodes___parent___id'
  | 'comments___nodes___parent___children'
  | 'comments___nodes___children'
  | 'comments___nodes___children___id'
  | 'comments___nodes___children___children'
  | 'comments___nodes___internal___content'
  | 'comments___nodes___internal___contentDigest'
  | 'comments___nodes___internal___description'
  | 'comments___nodes___internal___fieldOwners'
  | 'comments___nodes___internal___ignoreType'
  | 'comments___nodes___internal___mediaType'
  | 'comments___nodes___internal___owner'
  | 'comments___nodes___internal___type'
  | 'databaseId'
  | 'description'
  | 'email'
  | 'extraCapabilities'
  | 'firstName'
  | 'id'
  | 'isContentNode'
  | 'isTermNode'
  | 'lastName'
  | 'locale'
  | 'name'
  | 'nicename'
  | 'nickname'
  | 'pages___nodes'
  | 'pages___nodes___ancestors___nodes'
  | 'pages___nodes___authorDatabaseId'
  | 'pages___nodes___authorId'
  | 'pages___nodes___wpChildren___nodes'
  | 'pages___nodes___commentCount'
  | 'pages___nodes___commentStatus'
  | 'pages___nodes___comments___nodes'
  | 'pages___nodes___content'
  | 'pages___nodes___contentTypeName'
  | 'pages___nodes___databaseId'
  | 'pages___nodes___date'
  | 'pages___nodes___dateGmt'
  | 'pages___nodes___desiredSlug'
  | 'pages___nodes___enclosure'
  | 'pages___nodes___featuredImageDatabaseId'
  | 'pages___nodes___featuredImageId'
  | 'pages___nodes___guid'
  | 'pages___nodes___id'
  | 'pages___nodes___isContentNode'
  | 'pages___nodes___isFrontPage'
  | 'pages___nodes___isPostsPage'
  | 'pages___nodes___isPrivacyPage'
  | 'pages___nodes___isRevision'
  | 'pages___nodes___isTermNode'
  | 'pages___nodes___language___code'
  | 'pages___nodes___language___homeUrl'
  | 'pages___nodes___language___id'
  | 'pages___nodes___language___locale'
  | 'pages___nodes___language___name'
  | 'pages___nodes___language___slug'
  | 'pages___nodes___link'
  | 'pages___nodes___menuOrder'
  | 'pages___nodes___modified'
  | 'pages___nodes___modifiedGmt'
  | 'pages___nodes___parentDatabaseId'
  | 'pages___nodes___parentId'
  | 'pages___nodes___slug'
  | 'pages___nodes___status'
  | 'pages___nodes___template___templateName'
  | 'pages___nodes___terms___nodes'
  | 'pages___nodes___title'
  | 'pages___nodes___translations'
  | 'pages___nodes___translations___authorDatabaseId'
  | 'pages___nodes___translations___authorId'
  | 'pages___nodes___translations___commentCount'
  | 'pages___nodes___translations___commentStatus'
  | 'pages___nodes___translations___content'
  | 'pages___nodes___translations___contentTypeName'
  | 'pages___nodes___translations___databaseId'
  | 'pages___nodes___translations___date'
  | 'pages___nodes___translations___dateGmt'
  | 'pages___nodes___translations___desiredSlug'
  | 'pages___nodes___translations___enclosure'
  | 'pages___nodes___translations___featuredImageDatabaseId'
  | 'pages___nodes___translations___featuredImageId'
  | 'pages___nodes___translations___guid'
  | 'pages___nodes___translations___id'
  | 'pages___nodes___translations___isContentNode'
  | 'pages___nodes___translations___isFrontPage'
  | 'pages___nodes___translations___isPostsPage'
  | 'pages___nodes___translations___isPrivacyPage'
  | 'pages___nodes___translations___isRevision'
  | 'pages___nodes___translations___isTermNode'
  | 'pages___nodes___translations___link'
  | 'pages___nodes___translations___menuOrder'
  | 'pages___nodes___translations___modified'
  | 'pages___nodes___translations___modifiedGmt'
  | 'pages___nodes___translations___parentDatabaseId'
  | 'pages___nodes___translations___parentId'
  | 'pages___nodes___translations___slug'
  | 'pages___nodes___translations___status'
  | 'pages___nodes___translations___title'
  | 'pages___nodes___translations___translations'
  | 'pages___nodes___translations___uri'
  | 'pages___nodes___translations___nodeType'
  | 'pages___nodes___translations___children'
  | 'pages___nodes___uri'
  | 'pages___nodes___nodeType'
  | 'pages___nodes___parent___id'
  | 'pages___nodes___parent___children'
  | 'pages___nodes___children'
  | 'pages___nodes___children___id'
  | 'pages___nodes___children___children'
  | 'pages___nodes___internal___content'
  | 'pages___nodes___internal___contentDigest'
  | 'pages___nodes___internal___description'
  | 'pages___nodes___internal___fieldOwners'
  | 'pages___nodes___internal___ignoreType'
  | 'pages___nodes___internal___mediaType'
  | 'pages___nodes___internal___owner'
  | 'pages___nodes___internal___type'
  | 'posts___nodes'
  | 'posts___nodes___authorDatabaseId'
  | 'posts___nodes___authorId'
  | 'posts___nodes___categories___nodes'
  | 'posts___nodes___commentCount'
  | 'posts___nodes___commentStatus'
  | 'posts___nodes___comments___nodes'
  | 'posts___nodes___content'
  | 'posts___nodes___contentTypeName'
  | 'posts___nodes___databaseId'
  | 'posts___nodes___date'
  | 'posts___nodes___dateGmt'
  | 'posts___nodes___desiredSlug'
  | 'posts___nodes___enclosure'
  | 'posts___nodes___excerpt'
  | 'posts___nodes___featuredImageDatabaseId'
  | 'posts___nodes___featuredImageId'
  | 'posts___nodes___guid'
  | 'posts___nodes___id'
  | 'posts___nodes___isContentNode'
  | 'posts___nodes___isRevision'
  | 'posts___nodes___isSticky'
  | 'posts___nodes___isTermNode'
  | 'posts___nodes___language___code'
  | 'posts___nodes___language___homeUrl'
  | 'posts___nodes___language___id'
  | 'posts___nodes___language___locale'
  | 'posts___nodes___language___name'
  | 'posts___nodes___language___slug'
  | 'posts___nodes___link'
  | 'posts___nodes___modified'
  | 'posts___nodes___modifiedGmt'
  | 'posts___nodes___pingStatus'
  | 'posts___nodes___pinged'
  | 'posts___nodes___postFormats___nodes'
  | 'posts___nodes___realization___dateRealization'
  | 'posts___nodes___realization___describedTitle'
  | 'posts___nodes___realization___fieldGroupName'
  | 'posts___nodes___realization___location'
  | 'posts___nodes___realization___text'
  | 'posts___nodes___realization___title'
  | 'posts___nodes___slug'
  | 'posts___nodes___status'
  | 'posts___nodes___tags___nodes'
  | 'posts___nodes___template___templateName'
  | 'posts___nodes___terms___nodes'
  | 'posts___nodes___title'
  | 'posts___nodes___toPing'
  | 'posts___nodes___translations'
  | 'posts___nodes___translations___authorDatabaseId'
  | 'posts___nodes___translations___authorId'
  | 'posts___nodes___translations___commentCount'
  | 'posts___nodes___translations___commentStatus'
  | 'posts___nodes___translations___content'
  | 'posts___nodes___translations___contentTypeName'
  | 'posts___nodes___translations___databaseId'
  | 'posts___nodes___translations___date'
  | 'posts___nodes___translations___dateGmt'
  | 'posts___nodes___translations___desiredSlug'
  | 'posts___nodes___translations___enclosure'
  | 'posts___nodes___translations___excerpt'
  | 'posts___nodes___translations___featuredImageDatabaseId'
  | 'posts___nodes___translations___featuredImageId'
  | 'posts___nodes___translations___guid'
  | 'posts___nodes___translations___id'
  | 'posts___nodes___translations___isContentNode'
  | 'posts___nodes___translations___isRevision'
  | 'posts___nodes___translations___isSticky'
  | 'posts___nodes___translations___isTermNode'
  | 'posts___nodes___translations___link'
  | 'posts___nodes___translations___modified'
  | 'posts___nodes___translations___modifiedGmt'
  | 'posts___nodes___translations___pingStatus'
  | 'posts___nodes___translations___pinged'
  | 'posts___nodes___translations___slug'
  | 'posts___nodes___translations___status'
  | 'posts___nodes___translations___title'
  | 'posts___nodes___translations___toPing'
  | 'posts___nodes___translations___translations'
  | 'posts___nodes___translations___uri'
  | 'posts___nodes___translations___nodeType'
  | 'posts___nodes___translations___children'
  | 'posts___nodes___uri'
  | 'posts___nodes___nodeType'
  | 'posts___nodes___parent___id'
  | 'posts___nodes___parent___children'
  | 'posts___nodes___children'
  | 'posts___nodes___children___id'
  | 'posts___nodes___children___children'
  | 'posts___nodes___internal___content'
  | 'posts___nodes___internal___contentDigest'
  | 'posts___nodes___internal___description'
  | 'posts___nodes___internal___fieldOwners'
  | 'posts___nodes___internal___ignoreType'
  | 'posts___nodes___internal___mediaType'
  | 'posts___nodes___internal___owner'
  | 'posts___nodes___internal___type'
  | 'registeredDate'
  | 'roles___nodes'
  | 'roles___nodes___capabilities'
  | 'roles___nodes___displayName'
  | 'roles___nodes___id'
  | 'roles___nodes___name'
  | 'roles___nodes___nodeType'
  | 'roles___nodes___parent___id'
  | 'roles___nodes___parent___children'
  | 'roles___nodes___children'
  | 'roles___nodes___children___id'
  | 'roles___nodes___children___children'
  | 'roles___nodes___internal___content'
  | 'roles___nodes___internal___contentDigest'
  | 'roles___nodes___internal___description'
  | 'roles___nodes___internal___fieldOwners'
  | 'roles___nodes___internal___ignoreType'
  | 'roles___nodes___internal___mediaType'
  | 'roles___nodes___internal___owner'
  | 'roles___nodes___internal___type'
  | 'slug'
  | 'uri'
  | 'url'
  | 'username'
  | 'nodeType'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type WpUserGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpUserEdge>;
  nodes: Array<WpUser>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<WpUserGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type WpUserGroupConnectionDistinctArgs = {
  field: WpUserFieldsEnum;
};


export type WpUserGroupConnectionMaxArgs = {
  field: WpUserFieldsEnum;
};


export type WpUserGroupConnectionMinArgs = {
  field: WpUserFieldsEnum;
};


export type WpUserGroupConnectionSumArgs = {
  field: WpUserFieldsEnum;
};


export type WpUserGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: WpUserFieldsEnum;
};

export type WpUserSortInput = {
  fields?: InputMaybe<Array<InputMaybe<WpUserFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type WpCommentConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpCommentEdge>;
  nodes: Array<WpComment>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<WpCommentGroupConnection>;
};


export type WpCommentConnectionDistinctArgs = {
  field: WpCommentFieldsEnum;
};


export type WpCommentConnectionMaxArgs = {
  field: WpCommentFieldsEnum;
};


export type WpCommentConnectionMinArgs = {
  field: WpCommentFieldsEnum;
};


export type WpCommentConnectionSumArgs = {
  field: WpCommentFieldsEnum;
};


export type WpCommentConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: WpCommentFieldsEnum;
};

export type WpCommentEdge = {
  next?: Maybe<WpComment>;
  node: WpComment;
  previous?: Maybe<WpComment>;
};

export type WpCommentFieldsEnum =
  | 'agent'
  | 'approved'
  | 'author___node___databaseId'
  | 'author___node___email'
  | 'author___node___id'
  | 'author___node___name'
  | 'author___node___url'
  | 'authorIp'
  | 'commentedOn___node___contentTypeName'
  | 'commentedOn___node___databaseId'
  | 'commentedOn___node___date'
  | 'commentedOn___node___dateGmt'
  | 'commentedOn___node___desiredSlug'
  | 'commentedOn___node___enclosure'
  | 'commentedOn___node___guid'
  | 'commentedOn___node___id'
  | 'commentedOn___node___isContentNode'
  | 'commentedOn___node___isTermNode'
  | 'commentedOn___node___link'
  | 'commentedOn___node___modified'
  | 'commentedOn___node___modifiedGmt'
  | 'commentedOn___node___slug'
  | 'commentedOn___node___status'
  | 'commentedOn___node___template___templateName'
  | 'commentedOn___node___uri'
  | 'commentedOn___node___nodeType'
  | 'commentedOn___node___parent___id'
  | 'commentedOn___node___parent___children'
  | 'commentedOn___node___children'
  | 'commentedOn___node___children___id'
  | 'commentedOn___node___children___children'
  | 'commentedOn___node___internal___content'
  | 'commentedOn___node___internal___contentDigest'
  | 'commentedOn___node___internal___description'
  | 'commentedOn___node___internal___fieldOwners'
  | 'commentedOn___node___internal___ignoreType'
  | 'commentedOn___node___internal___mediaType'
  | 'commentedOn___node___internal___owner'
  | 'commentedOn___node___internal___type'
  | 'content'
  | 'databaseId'
  | 'date'
  | 'dateGmt'
  | 'id'
  | 'karma'
  | 'wpParent___node___agent'
  | 'wpParent___node___approved'
  | 'wpParent___node___authorIp'
  | 'wpParent___node___content'
  | 'wpParent___node___databaseId'
  | 'wpParent___node___date'
  | 'wpParent___node___dateGmt'
  | 'wpParent___node___id'
  | 'wpParent___node___karma'
  | 'wpParent___node___parentDatabaseId'
  | 'wpParent___node___parentId'
  | 'wpParent___node___replies___nodes'
  | 'wpParent___node___type'
  | 'wpParent___node___nodeType'
  | 'wpParent___node___parent___id'
  | 'wpParent___node___parent___children'
  | 'wpParent___node___children'
  | 'wpParent___node___children___id'
  | 'wpParent___node___children___children'
  | 'wpParent___node___internal___content'
  | 'wpParent___node___internal___contentDigest'
  | 'wpParent___node___internal___description'
  | 'wpParent___node___internal___fieldOwners'
  | 'wpParent___node___internal___ignoreType'
  | 'wpParent___node___internal___mediaType'
  | 'wpParent___node___internal___owner'
  | 'wpParent___node___internal___type'
  | 'parentDatabaseId'
  | 'parentId'
  | 'replies___nodes'
  | 'replies___nodes___agent'
  | 'replies___nodes___approved'
  | 'replies___nodes___authorIp'
  | 'replies___nodes___content'
  | 'replies___nodes___databaseId'
  | 'replies___nodes___date'
  | 'replies___nodes___dateGmt'
  | 'replies___nodes___id'
  | 'replies___nodes___karma'
  | 'replies___nodes___parentDatabaseId'
  | 'replies___nodes___parentId'
  | 'replies___nodes___replies___nodes'
  | 'replies___nodes___type'
  | 'replies___nodes___nodeType'
  | 'replies___nodes___parent___id'
  | 'replies___nodes___parent___children'
  | 'replies___nodes___children'
  | 'replies___nodes___children___id'
  | 'replies___nodes___children___children'
  | 'replies___nodes___internal___content'
  | 'replies___nodes___internal___contentDigest'
  | 'replies___nodes___internal___description'
  | 'replies___nodes___internal___fieldOwners'
  | 'replies___nodes___internal___ignoreType'
  | 'replies___nodes___internal___mediaType'
  | 'replies___nodes___internal___owner'
  | 'replies___nodes___internal___type'
  | 'type'
  | 'nodeType'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type WpCommentGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpCommentEdge>;
  nodes: Array<WpComment>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<WpCommentGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type WpCommentGroupConnectionDistinctArgs = {
  field: WpCommentFieldsEnum;
};


export type WpCommentGroupConnectionMaxArgs = {
  field: WpCommentFieldsEnum;
};


export type WpCommentGroupConnectionMinArgs = {
  field: WpCommentFieldsEnum;
};


export type WpCommentGroupConnectionSumArgs = {
  field: WpCommentFieldsEnum;
};


export type WpCommentGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: WpCommentFieldsEnum;
};

export type WpCommentSortInput = {
  fields?: InputMaybe<Array<InputMaybe<WpCommentFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type WpMediaItemConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpMediaItemEdge>;
  nodes: Array<WpMediaItem>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<WpMediaItemGroupConnection>;
};


export type WpMediaItemConnectionDistinctArgs = {
  field: WpMediaItemFieldsEnum;
};


export type WpMediaItemConnectionMaxArgs = {
  field: WpMediaItemFieldsEnum;
};


export type WpMediaItemConnectionMinArgs = {
  field: WpMediaItemFieldsEnum;
};


export type WpMediaItemConnectionSumArgs = {
  field: WpMediaItemFieldsEnum;
};


export type WpMediaItemConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: WpMediaItemFieldsEnum;
};

export type WpMediaItemEdge = {
  next?: Maybe<WpMediaItem>;
  node: WpMediaItem;
  previous?: Maybe<WpMediaItem>;
};

export type WpMediaItemFieldsEnum =
  | 'altText'
  | 'ancestors___nodes'
  | 'ancestors___nodes___contentTypeName'
  | 'ancestors___nodes___databaseId'
  | 'ancestors___nodes___date'
  | 'ancestors___nodes___dateGmt'
  | 'ancestors___nodes___desiredSlug'
  | 'ancestors___nodes___enclosure'
  | 'ancestors___nodes___guid'
  | 'ancestors___nodes___id'
  | 'ancestors___nodes___isContentNode'
  | 'ancestors___nodes___isTermNode'
  | 'ancestors___nodes___link'
  | 'ancestors___nodes___modified'
  | 'ancestors___nodes___modifiedGmt'
  | 'ancestors___nodes___slug'
  | 'ancestors___nodes___status'
  | 'ancestors___nodes___template___templateName'
  | 'ancestors___nodes___uri'
  | 'ancestors___nodes___nodeType'
  | 'ancestors___nodes___parent___id'
  | 'ancestors___nodes___parent___children'
  | 'ancestors___nodes___children'
  | 'ancestors___nodes___children___id'
  | 'ancestors___nodes___children___children'
  | 'ancestors___nodes___internal___content'
  | 'ancestors___nodes___internal___contentDigest'
  | 'ancestors___nodes___internal___description'
  | 'ancestors___nodes___internal___fieldOwners'
  | 'ancestors___nodes___internal___ignoreType'
  | 'ancestors___nodes___internal___mediaType'
  | 'ancestors___nodes___internal___owner'
  | 'ancestors___nodes___internal___type'
  | 'author___node___avatar___default'
  | 'author___node___avatar___extraAttr'
  | 'author___node___avatar___forceDefault'
  | 'author___node___avatar___foundAvatar'
  | 'author___node___avatar___height'
  | 'author___node___avatar___rating'
  | 'author___node___avatar___scheme'
  | 'author___node___avatar___size'
  | 'author___node___avatar___url'
  | 'author___node___avatar___width'
  | 'author___node___capKey'
  | 'author___node___capabilities'
  | 'author___node___comments___nodes'
  | 'author___node___databaseId'
  | 'author___node___description'
  | 'author___node___email'
  | 'author___node___extraCapabilities'
  | 'author___node___firstName'
  | 'author___node___id'
  | 'author___node___isContentNode'
  | 'author___node___isTermNode'
  | 'author___node___lastName'
  | 'author___node___locale'
  | 'author___node___name'
  | 'author___node___nicename'
  | 'author___node___nickname'
  | 'author___node___pages___nodes'
  | 'author___node___posts___nodes'
  | 'author___node___registeredDate'
  | 'author___node___roles___nodes'
  | 'author___node___slug'
  | 'author___node___uri'
  | 'author___node___url'
  | 'author___node___username'
  | 'author___node___nodeType'
  | 'author___node___parent___id'
  | 'author___node___parent___children'
  | 'author___node___children'
  | 'author___node___children___id'
  | 'author___node___children___children'
  | 'author___node___internal___content'
  | 'author___node___internal___contentDigest'
  | 'author___node___internal___description'
  | 'author___node___internal___fieldOwners'
  | 'author___node___internal___ignoreType'
  | 'author___node___internal___mediaType'
  | 'author___node___internal___owner'
  | 'author___node___internal___type'
  | 'authorDatabaseId'
  | 'authorId'
  | 'caption'
  | 'wpChildren___nodes'
  | 'wpChildren___nodes___contentTypeName'
  | 'wpChildren___nodes___databaseId'
  | 'wpChildren___nodes___date'
  | 'wpChildren___nodes___dateGmt'
  | 'wpChildren___nodes___desiredSlug'
  | 'wpChildren___nodes___enclosure'
  | 'wpChildren___nodes___guid'
  | 'wpChildren___nodes___id'
  | 'wpChildren___nodes___isContentNode'
  | 'wpChildren___nodes___isTermNode'
  | 'wpChildren___nodes___link'
  | 'wpChildren___nodes___modified'
  | 'wpChildren___nodes___modifiedGmt'
  | 'wpChildren___nodes___slug'
  | 'wpChildren___nodes___status'
  | 'wpChildren___nodes___template___templateName'
  | 'wpChildren___nodes___uri'
  | 'wpChildren___nodes___nodeType'
  | 'wpChildren___nodes___parent___id'
  | 'wpChildren___nodes___parent___children'
  | 'wpChildren___nodes___children'
  | 'wpChildren___nodes___children___id'
  | 'wpChildren___nodes___children___children'
  | 'wpChildren___nodes___internal___content'
  | 'wpChildren___nodes___internal___contentDigest'
  | 'wpChildren___nodes___internal___description'
  | 'wpChildren___nodes___internal___fieldOwners'
  | 'wpChildren___nodes___internal___ignoreType'
  | 'wpChildren___nodes___internal___mediaType'
  | 'wpChildren___nodes___internal___owner'
  | 'wpChildren___nodes___internal___type'
  | 'commentCount'
  | 'commentStatus'
  | 'comments___nodes'
  | 'comments___nodes___agent'
  | 'comments___nodes___approved'
  | 'comments___nodes___authorIp'
  | 'comments___nodes___content'
  | 'comments___nodes___databaseId'
  | 'comments___nodes___date'
  | 'comments___nodes___dateGmt'
  | 'comments___nodes___id'
  | 'comments___nodes___karma'
  | 'comments___nodes___parentDatabaseId'
  | 'comments___nodes___parentId'
  | 'comments___nodes___replies___nodes'
  | 'comments___nodes___type'
  | 'comments___nodes___nodeType'
  | 'comments___nodes___parent___id'
  | 'comments___nodes___parent___children'
  | 'comments___nodes___children'
  | 'comments___nodes___children___id'
  | 'comments___nodes___children___children'
  | 'comments___nodes___internal___content'
  | 'comments___nodes___internal___contentDigest'
  | 'comments___nodes___internal___description'
  | 'comments___nodes___internal___fieldOwners'
  | 'comments___nodes___internal___ignoreType'
  | 'comments___nodes___internal___mediaType'
  | 'comments___nodes___internal___owner'
  | 'comments___nodes___internal___type'
  | 'contentType___node___archivePath'
  | 'contentType___node___canExport'
  | 'contentType___node___connectedTaxonomies___nodes'
  | 'contentType___node___contentNodes___nodes'
  | 'contentType___node___deleteWithUser'
  | 'contentType___node___description'
  | 'contentType___node___excludeFromSearch'
  | 'contentType___node___graphqlPluralName'
  | 'contentType___node___graphqlSingleName'
  | 'contentType___node___hasArchive'
  | 'contentType___node___hierarchical'
  | 'contentType___node___id'
  | 'contentType___node___isContentNode'
  | 'contentType___node___isFrontPage'
  | 'contentType___node___isPostsPage'
  | 'contentType___node___isTermNode'
  | 'contentType___node___label'
  | 'contentType___node___labels___addNew'
  | 'contentType___node___labels___addNewItem'
  | 'contentType___node___labels___allItems'
  | 'contentType___node___labels___archives'
  | 'contentType___node___labels___attributes'
  | 'contentType___node___labels___editItem'
  | 'contentType___node___labels___featuredImage'
  | 'contentType___node___labels___filterItemsList'
  | 'contentType___node___labels___insertIntoItem'
  | 'contentType___node___labels___itemsList'
  | 'contentType___node___labels___itemsListNavigation'
  | 'contentType___node___labels___menuName'
  | 'contentType___node___labels___name'
  | 'contentType___node___labels___newItem'
  | 'contentType___node___labels___notFound'
  | 'contentType___node___labels___notFoundInTrash'
  | 'contentType___node___labels___parentItemColon'
  | 'contentType___node___labels___removeFeaturedImage'
  | 'contentType___node___labels___searchItems'
  | 'contentType___node___labels___setFeaturedImage'
  | 'contentType___node___labels___singularName'
  | 'contentType___node___labels___uploadedToThisItem'
  | 'contentType___node___labels___useFeaturedImage'
  | 'contentType___node___labels___viewItem'
  | 'contentType___node___labels___viewItems'
  | 'contentType___node___menuIcon'
  | 'contentType___node___menuPosition'
  | 'contentType___node___name'
  | 'contentType___node___public'
  | 'contentType___node___publiclyQueryable'
  | 'contentType___node___restBase'
  | 'contentType___node___restControllerClass'
  | 'contentType___node___showInAdminBar'
  | 'contentType___node___showInGraphql'
  | 'contentType___node___showInMenu'
  | 'contentType___node___showInNavMenus'
  | 'contentType___node___showInRest'
  | 'contentType___node___showUi'
  | 'contentType___node___uri'
  | 'contentType___node___nodeType'
  | 'contentType___node___parent___id'
  | 'contentType___node___parent___children'
  | 'contentType___node___children'
  | 'contentType___node___children___id'
  | 'contentType___node___children___children'
  | 'contentType___node___internal___content'
  | 'contentType___node___internal___contentDigest'
  | 'contentType___node___internal___description'
  | 'contentType___node___internal___fieldOwners'
  | 'contentType___node___internal___ignoreType'
  | 'contentType___node___internal___mediaType'
  | 'contentType___node___internal___owner'
  | 'contentType___node___internal___type'
  | 'contentTypeName'
  | 'databaseId'
  | 'date'
  | 'dateGmt'
  | 'description'
  | 'desiredSlug'
  | 'enclosure'
  | 'fileSize'
  | 'guid'
  | 'id'
  | 'isContentNode'
  | 'isTermNode'
  | 'lastEditedBy___node___avatar___default'
  | 'lastEditedBy___node___avatar___extraAttr'
  | 'lastEditedBy___node___avatar___forceDefault'
  | 'lastEditedBy___node___avatar___foundAvatar'
  | 'lastEditedBy___node___avatar___height'
  | 'lastEditedBy___node___avatar___rating'
  | 'lastEditedBy___node___avatar___scheme'
  | 'lastEditedBy___node___avatar___size'
  | 'lastEditedBy___node___avatar___url'
  | 'lastEditedBy___node___avatar___width'
  | 'lastEditedBy___node___capKey'
  | 'lastEditedBy___node___capabilities'
  | 'lastEditedBy___node___comments___nodes'
  | 'lastEditedBy___node___databaseId'
  | 'lastEditedBy___node___description'
  | 'lastEditedBy___node___email'
  | 'lastEditedBy___node___extraCapabilities'
  | 'lastEditedBy___node___firstName'
  | 'lastEditedBy___node___id'
  | 'lastEditedBy___node___isContentNode'
  | 'lastEditedBy___node___isTermNode'
  | 'lastEditedBy___node___lastName'
  | 'lastEditedBy___node___locale'
  | 'lastEditedBy___node___name'
  | 'lastEditedBy___node___nicename'
  | 'lastEditedBy___node___nickname'
  | 'lastEditedBy___node___pages___nodes'
  | 'lastEditedBy___node___posts___nodes'
  | 'lastEditedBy___node___registeredDate'
  | 'lastEditedBy___node___roles___nodes'
  | 'lastEditedBy___node___slug'
  | 'lastEditedBy___node___uri'
  | 'lastEditedBy___node___url'
  | 'lastEditedBy___node___username'
  | 'lastEditedBy___node___nodeType'
  | 'lastEditedBy___node___parent___id'
  | 'lastEditedBy___node___parent___children'
  | 'lastEditedBy___node___children'
  | 'lastEditedBy___node___children___id'
  | 'lastEditedBy___node___children___children'
  | 'lastEditedBy___node___internal___content'
  | 'lastEditedBy___node___internal___contentDigest'
  | 'lastEditedBy___node___internal___description'
  | 'lastEditedBy___node___internal___fieldOwners'
  | 'lastEditedBy___node___internal___ignoreType'
  | 'lastEditedBy___node___internal___mediaType'
  | 'lastEditedBy___node___internal___owner'
  | 'lastEditedBy___node___internal___type'
  | 'link'
  | 'mediaDetails___file'
  | 'mediaDetails___height'
  | 'mediaDetails___meta___aperture'
  | 'mediaDetails___meta___camera'
  | 'mediaDetails___meta___caption'
  | 'mediaDetails___meta___copyright'
  | 'mediaDetails___meta___createdTimestamp'
  | 'mediaDetails___meta___credit'
  | 'mediaDetails___meta___focalLength'
  | 'mediaDetails___meta___iso'
  | 'mediaDetails___meta___keywords'
  | 'mediaDetails___meta___orientation'
  | 'mediaDetails___meta___shutterSpeed'
  | 'mediaDetails___meta___title'
  | 'mediaDetails___sizes'
  | 'mediaDetails___sizes___file'
  | 'mediaDetails___sizes___fileSize'
  | 'mediaDetails___sizes___height'
  | 'mediaDetails___sizes___mimeType'
  | 'mediaDetails___sizes___name'
  | 'mediaDetails___sizes___sourceUrl'
  | 'mediaDetails___sizes___width'
  | 'mediaDetails___width'
  | 'mediaItemUrl'
  | 'mediaType'
  | 'mimeType'
  | 'modified'
  | 'modifiedGmt'
  | 'wpParent___node___contentTypeName'
  | 'wpParent___node___databaseId'
  | 'wpParent___node___date'
  | 'wpParent___node___dateGmt'
  | 'wpParent___node___desiredSlug'
  | 'wpParent___node___enclosure'
  | 'wpParent___node___guid'
  | 'wpParent___node___id'
  | 'wpParent___node___isContentNode'
  | 'wpParent___node___isTermNode'
  | 'wpParent___node___link'
  | 'wpParent___node___modified'
  | 'wpParent___node___modifiedGmt'
  | 'wpParent___node___slug'
  | 'wpParent___node___status'
  | 'wpParent___node___template___templateName'
  | 'wpParent___node___uri'
  | 'wpParent___node___nodeType'
  | 'wpParent___node___parent___id'
  | 'wpParent___node___parent___children'
  | 'wpParent___node___children'
  | 'wpParent___node___children___id'
  | 'wpParent___node___children___children'
  | 'wpParent___node___internal___content'
  | 'wpParent___node___internal___contentDigest'
  | 'wpParent___node___internal___description'
  | 'wpParent___node___internal___fieldOwners'
  | 'wpParent___node___internal___ignoreType'
  | 'wpParent___node___internal___mediaType'
  | 'wpParent___node___internal___owner'
  | 'wpParent___node___internal___type'
  | 'parentDatabaseId'
  | 'parentId'
  | 'sizes'
  | 'slug'
  | 'sourceUrl'
  | 'srcSet'
  | 'status'
  | 'template___templateName'
  | 'title'
  | 'uri'
  | 'nodeType'
  | 'remoteFile___sourceInstanceName'
  | 'remoteFile___absolutePath'
  | 'remoteFile___relativePath'
  | 'remoteFile___extension'
  | 'remoteFile___size'
  | 'remoteFile___prettySize'
  | 'remoteFile___modifiedTime'
  | 'remoteFile___accessTime'
  | 'remoteFile___changeTime'
  | 'remoteFile___birthTime'
  | 'remoteFile___root'
  | 'remoteFile___dir'
  | 'remoteFile___base'
  | 'remoteFile___ext'
  | 'remoteFile___name'
  | 'remoteFile___relativeDirectory'
  | 'remoteFile___dev'
  | 'remoteFile___mode'
  | 'remoteFile___nlink'
  | 'remoteFile___uid'
  | 'remoteFile___gid'
  | 'remoteFile___rdev'
  | 'remoteFile___ino'
  | 'remoteFile___atimeMs'
  | 'remoteFile___mtimeMs'
  | 'remoteFile___ctimeMs'
  | 'remoteFile___atime'
  | 'remoteFile___mtime'
  | 'remoteFile___ctime'
  | 'remoteFile___birthtime'
  | 'remoteFile___birthtimeMs'
  | 'remoteFile___blksize'
  | 'remoteFile___blocks'
  | 'remoteFile___url'
  | 'remoteFile___publicURL'
  | 'remoteFile___childrenImageSharp'
  | 'remoteFile___childrenImageSharp___fixed___base64'
  | 'remoteFile___childrenImageSharp___fixed___tracedSVG'
  | 'remoteFile___childrenImageSharp___fixed___aspectRatio'
  | 'remoteFile___childrenImageSharp___fixed___width'
  | 'remoteFile___childrenImageSharp___fixed___height'
  | 'remoteFile___childrenImageSharp___fixed___src'
  | 'remoteFile___childrenImageSharp___fixed___srcSet'
  | 'remoteFile___childrenImageSharp___fixed___srcWebp'
  | 'remoteFile___childrenImageSharp___fixed___srcSetWebp'
  | 'remoteFile___childrenImageSharp___fixed___originalName'
  | 'remoteFile___childrenImageSharp___fluid___base64'
  | 'remoteFile___childrenImageSharp___fluid___tracedSVG'
  | 'remoteFile___childrenImageSharp___fluid___aspectRatio'
  | 'remoteFile___childrenImageSharp___fluid___src'
  | 'remoteFile___childrenImageSharp___fluid___srcSet'
  | 'remoteFile___childrenImageSharp___fluid___srcWebp'
  | 'remoteFile___childrenImageSharp___fluid___srcSetWebp'
  | 'remoteFile___childrenImageSharp___fluid___sizes'
  | 'remoteFile___childrenImageSharp___fluid___originalImg'
  | 'remoteFile___childrenImageSharp___fluid___originalName'
  | 'remoteFile___childrenImageSharp___fluid___presentationWidth'
  | 'remoteFile___childrenImageSharp___fluid___presentationHeight'
  | 'remoteFile___childrenImageSharp___gatsbyImageData'
  | 'remoteFile___childrenImageSharp___original___width'
  | 'remoteFile___childrenImageSharp___original___height'
  | 'remoteFile___childrenImageSharp___original___src'
  | 'remoteFile___childrenImageSharp___resize___src'
  | 'remoteFile___childrenImageSharp___resize___tracedSVG'
  | 'remoteFile___childrenImageSharp___resize___width'
  | 'remoteFile___childrenImageSharp___resize___height'
  | 'remoteFile___childrenImageSharp___resize___aspectRatio'
  | 'remoteFile___childrenImageSharp___resize___originalName'
  | 'remoteFile___childrenImageSharp___id'
  | 'remoteFile___childrenImageSharp___parent___id'
  | 'remoteFile___childrenImageSharp___parent___children'
  | 'remoteFile___childrenImageSharp___children'
  | 'remoteFile___childrenImageSharp___children___id'
  | 'remoteFile___childrenImageSharp___children___children'
  | 'remoteFile___childrenImageSharp___internal___content'
  | 'remoteFile___childrenImageSharp___internal___contentDigest'
  | 'remoteFile___childrenImageSharp___internal___description'
  | 'remoteFile___childrenImageSharp___internal___fieldOwners'
  | 'remoteFile___childrenImageSharp___internal___ignoreType'
  | 'remoteFile___childrenImageSharp___internal___mediaType'
  | 'remoteFile___childrenImageSharp___internal___owner'
  | 'remoteFile___childrenImageSharp___internal___type'
  | 'remoteFile___childImageSharp___fixed___base64'
  | 'remoteFile___childImageSharp___fixed___tracedSVG'
  | 'remoteFile___childImageSharp___fixed___aspectRatio'
  | 'remoteFile___childImageSharp___fixed___width'
  | 'remoteFile___childImageSharp___fixed___height'
  | 'remoteFile___childImageSharp___fixed___src'
  | 'remoteFile___childImageSharp___fixed___srcSet'
  | 'remoteFile___childImageSharp___fixed___srcWebp'
  | 'remoteFile___childImageSharp___fixed___srcSetWebp'
  | 'remoteFile___childImageSharp___fixed___originalName'
  | 'remoteFile___childImageSharp___fluid___base64'
  | 'remoteFile___childImageSharp___fluid___tracedSVG'
  | 'remoteFile___childImageSharp___fluid___aspectRatio'
  | 'remoteFile___childImageSharp___fluid___src'
  | 'remoteFile___childImageSharp___fluid___srcSet'
  | 'remoteFile___childImageSharp___fluid___srcWebp'
  | 'remoteFile___childImageSharp___fluid___srcSetWebp'
  | 'remoteFile___childImageSharp___fluid___sizes'
  | 'remoteFile___childImageSharp___fluid___originalImg'
  | 'remoteFile___childImageSharp___fluid___originalName'
  | 'remoteFile___childImageSharp___fluid___presentationWidth'
  | 'remoteFile___childImageSharp___fluid___presentationHeight'
  | 'remoteFile___childImageSharp___gatsbyImageData'
  | 'remoteFile___childImageSharp___original___width'
  | 'remoteFile___childImageSharp___original___height'
  | 'remoteFile___childImageSharp___original___src'
  | 'remoteFile___childImageSharp___resize___src'
  | 'remoteFile___childImageSharp___resize___tracedSVG'
  | 'remoteFile___childImageSharp___resize___width'
  | 'remoteFile___childImageSharp___resize___height'
  | 'remoteFile___childImageSharp___resize___aspectRatio'
  | 'remoteFile___childImageSharp___resize___originalName'
  | 'remoteFile___childImageSharp___id'
  | 'remoteFile___childImageSharp___parent___id'
  | 'remoteFile___childImageSharp___parent___children'
  | 'remoteFile___childImageSharp___children'
  | 'remoteFile___childImageSharp___children___id'
  | 'remoteFile___childImageSharp___children___children'
  | 'remoteFile___childImageSharp___internal___content'
  | 'remoteFile___childImageSharp___internal___contentDigest'
  | 'remoteFile___childImageSharp___internal___description'
  | 'remoteFile___childImageSharp___internal___fieldOwners'
  | 'remoteFile___childImageSharp___internal___ignoreType'
  | 'remoteFile___childImageSharp___internal___mediaType'
  | 'remoteFile___childImageSharp___internal___owner'
  | 'remoteFile___childImageSharp___internal___type'
  | 'remoteFile___id'
  | 'remoteFile___parent___id'
  | 'remoteFile___parent___parent___id'
  | 'remoteFile___parent___parent___children'
  | 'remoteFile___parent___children'
  | 'remoteFile___parent___children___id'
  | 'remoteFile___parent___children___children'
  | 'remoteFile___parent___internal___content'
  | 'remoteFile___parent___internal___contentDigest'
  | 'remoteFile___parent___internal___description'
  | 'remoteFile___parent___internal___fieldOwners'
  | 'remoteFile___parent___internal___ignoreType'
  | 'remoteFile___parent___internal___mediaType'
  | 'remoteFile___parent___internal___owner'
  | 'remoteFile___parent___internal___type'
  | 'remoteFile___children'
  | 'remoteFile___children___id'
  | 'remoteFile___children___parent___id'
  | 'remoteFile___children___parent___children'
  | 'remoteFile___children___children'
  | 'remoteFile___children___children___id'
  | 'remoteFile___children___children___children'
  | 'remoteFile___children___internal___content'
  | 'remoteFile___children___internal___contentDigest'
  | 'remoteFile___children___internal___description'
  | 'remoteFile___children___internal___fieldOwners'
  | 'remoteFile___children___internal___ignoreType'
  | 'remoteFile___children___internal___mediaType'
  | 'remoteFile___children___internal___owner'
  | 'remoteFile___children___internal___type'
  | 'remoteFile___internal___content'
  | 'remoteFile___internal___contentDigest'
  | 'remoteFile___internal___description'
  | 'remoteFile___internal___fieldOwners'
  | 'remoteFile___internal___ignoreType'
  | 'remoteFile___internal___mediaType'
  | 'remoteFile___internal___owner'
  | 'remoteFile___internal___type'
  | 'localFile___sourceInstanceName'
  | 'localFile___absolutePath'
  | 'localFile___relativePath'
  | 'localFile___extension'
  | 'localFile___size'
  | 'localFile___prettySize'
  | 'localFile___modifiedTime'
  | 'localFile___accessTime'
  | 'localFile___changeTime'
  | 'localFile___birthTime'
  | 'localFile___root'
  | 'localFile___dir'
  | 'localFile___base'
  | 'localFile___ext'
  | 'localFile___name'
  | 'localFile___relativeDirectory'
  | 'localFile___dev'
  | 'localFile___mode'
  | 'localFile___nlink'
  | 'localFile___uid'
  | 'localFile___gid'
  | 'localFile___rdev'
  | 'localFile___ino'
  | 'localFile___atimeMs'
  | 'localFile___mtimeMs'
  | 'localFile___ctimeMs'
  | 'localFile___atime'
  | 'localFile___mtime'
  | 'localFile___ctime'
  | 'localFile___birthtime'
  | 'localFile___birthtimeMs'
  | 'localFile___blksize'
  | 'localFile___blocks'
  | 'localFile___url'
  | 'localFile___publicURL'
  | 'localFile___childrenImageSharp'
  | 'localFile___childrenImageSharp___fixed___base64'
  | 'localFile___childrenImageSharp___fixed___tracedSVG'
  | 'localFile___childrenImageSharp___fixed___aspectRatio'
  | 'localFile___childrenImageSharp___fixed___width'
  | 'localFile___childrenImageSharp___fixed___height'
  | 'localFile___childrenImageSharp___fixed___src'
  | 'localFile___childrenImageSharp___fixed___srcSet'
  | 'localFile___childrenImageSharp___fixed___srcWebp'
  | 'localFile___childrenImageSharp___fixed___srcSetWebp'
  | 'localFile___childrenImageSharp___fixed___originalName'
  | 'localFile___childrenImageSharp___fluid___base64'
  | 'localFile___childrenImageSharp___fluid___tracedSVG'
  | 'localFile___childrenImageSharp___fluid___aspectRatio'
  | 'localFile___childrenImageSharp___fluid___src'
  | 'localFile___childrenImageSharp___fluid___srcSet'
  | 'localFile___childrenImageSharp___fluid___srcWebp'
  | 'localFile___childrenImageSharp___fluid___srcSetWebp'
  | 'localFile___childrenImageSharp___fluid___sizes'
  | 'localFile___childrenImageSharp___fluid___originalImg'
  | 'localFile___childrenImageSharp___fluid___originalName'
  | 'localFile___childrenImageSharp___fluid___presentationWidth'
  | 'localFile___childrenImageSharp___fluid___presentationHeight'
  | 'localFile___childrenImageSharp___gatsbyImageData'
  | 'localFile___childrenImageSharp___original___width'
  | 'localFile___childrenImageSharp___original___height'
  | 'localFile___childrenImageSharp___original___src'
  | 'localFile___childrenImageSharp___resize___src'
  | 'localFile___childrenImageSharp___resize___tracedSVG'
  | 'localFile___childrenImageSharp___resize___width'
  | 'localFile___childrenImageSharp___resize___height'
  | 'localFile___childrenImageSharp___resize___aspectRatio'
  | 'localFile___childrenImageSharp___resize___originalName'
  | 'localFile___childrenImageSharp___id'
  | 'localFile___childrenImageSharp___parent___id'
  | 'localFile___childrenImageSharp___parent___children'
  | 'localFile___childrenImageSharp___children'
  | 'localFile___childrenImageSharp___children___id'
  | 'localFile___childrenImageSharp___children___children'
  | 'localFile___childrenImageSharp___internal___content'
  | 'localFile___childrenImageSharp___internal___contentDigest'
  | 'localFile___childrenImageSharp___internal___description'
  | 'localFile___childrenImageSharp___internal___fieldOwners'
  | 'localFile___childrenImageSharp___internal___ignoreType'
  | 'localFile___childrenImageSharp___internal___mediaType'
  | 'localFile___childrenImageSharp___internal___owner'
  | 'localFile___childrenImageSharp___internal___type'
  | 'localFile___childImageSharp___fixed___base64'
  | 'localFile___childImageSharp___fixed___tracedSVG'
  | 'localFile___childImageSharp___fixed___aspectRatio'
  | 'localFile___childImageSharp___fixed___width'
  | 'localFile___childImageSharp___fixed___height'
  | 'localFile___childImageSharp___fixed___src'
  | 'localFile___childImageSharp___fixed___srcSet'
  | 'localFile___childImageSharp___fixed___srcWebp'
  | 'localFile___childImageSharp___fixed___srcSetWebp'
  | 'localFile___childImageSharp___fixed___originalName'
  | 'localFile___childImageSharp___fluid___base64'
  | 'localFile___childImageSharp___fluid___tracedSVG'
  | 'localFile___childImageSharp___fluid___aspectRatio'
  | 'localFile___childImageSharp___fluid___src'
  | 'localFile___childImageSharp___fluid___srcSet'
  | 'localFile___childImageSharp___fluid___srcWebp'
  | 'localFile___childImageSharp___fluid___srcSetWebp'
  | 'localFile___childImageSharp___fluid___sizes'
  | 'localFile___childImageSharp___fluid___originalImg'
  | 'localFile___childImageSharp___fluid___originalName'
  | 'localFile___childImageSharp___fluid___presentationWidth'
  | 'localFile___childImageSharp___fluid___presentationHeight'
  | 'localFile___childImageSharp___gatsbyImageData'
  | 'localFile___childImageSharp___original___width'
  | 'localFile___childImageSharp___original___height'
  | 'localFile___childImageSharp___original___src'
  | 'localFile___childImageSharp___resize___src'
  | 'localFile___childImageSharp___resize___tracedSVG'
  | 'localFile___childImageSharp___resize___width'
  | 'localFile___childImageSharp___resize___height'
  | 'localFile___childImageSharp___resize___aspectRatio'
  | 'localFile___childImageSharp___resize___originalName'
  | 'localFile___childImageSharp___id'
  | 'localFile___childImageSharp___parent___id'
  | 'localFile___childImageSharp___parent___children'
  | 'localFile___childImageSharp___children'
  | 'localFile___childImageSharp___children___id'
  | 'localFile___childImageSharp___children___children'
  | 'localFile___childImageSharp___internal___content'
  | 'localFile___childImageSharp___internal___contentDigest'
  | 'localFile___childImageSharp___internal___description'
  | 'localFile___childImageSharp___internal___fieldOwners'
  | 'localFile___childImageSharp___internal___ignoreType'
  | 'localFile___childImageSharp___internal___mediaType'
  | 'localFile___childImageSharp___internal___owner'
  | 'localFile___childImageSharp___internal___type'
  | 'localFile___id'
  | 'localFile___parent___id'
  | 'localFile___parent___parent___id'
  | 'localFile___parent___parent___children'
  | 'localFile___parent___children'
  | 'localFile___parent___children___id'
  | 'localFile___parent___children___children'
  | 'localFile___parent___internal___content'
  | 'localFile___parent___internal___contentDigest'
  | 'localFile___parent___internal___description'
  | 'localFile___parent___internal___fieldOwners'
  | 'localFile___parent___internal___ignoreType'
  | 'localFile___parent___internal___mediaType'
  | 'localFile___parent___internal___owner'
  | 'localFile___parent___internal___type'
  | 'localFile___children'
  | 'localFile___children___id'
  | 'localFile___children___parent___id'
  | 'localFile___children___parent___children'
  | 'localFile___children___children'
  | 'localFile___children___children___id'
  | 'localFile___children___children___children'
  | 'localFile___children___internal___content'
  | 'localFile___children___internal___contentDigest'
  | 'localFile___children___internal___description'
  | 'localFile___children___internal___fieldOwners'
  | 'localFile___children___internal___ignoreType'
  | 'localFile___children___internal___mediaType'
  | 'localFile___children___internal___owner'
  | 'localFile___children___internal___type'
  | 'localFile___internal___content'
  | 'localFile___internal___contentDigest'
  | 'localFile___internal___description'
  | 'localFile___internal___fieldOwners'
  | 'localFile___internal___ignoreType'
  | 'localFile___internal___mediaType'
  | 'localFile___internal___owner'
  | 'localFile___internal___type'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'filename'
  | 'filesize'
  | 'width'
  | 'height'
  | 'publicUrl'
  | 'resize___width'
  | 'resize___height'
  | 'resize___src'
  | 'gatsbyImage';

export type WpMediaItemGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpMediaItemEdge>;
  nodes: Array<WpMediaItem>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<WpMediaItemGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type WpMediaItemGroupConnectionDistinctArgs = {
  field: WpMediaItemFieldsEnum;
};


export type WpMediaItemGroupConnectionMaxArgs = {
  field: WpMediaItemFieldsEnum;
};


export type WpMediaItemGroupConnectionMinArgs = {
  field: WpMediaItemFieldsEnum;
};


export type WpMediaItemGroupConnectionSumArgs = {
  field: WpMediaItemFieldsEnum;
};


export type WpMediaItemGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: WpMediaItemFieldsEnum;
};

export type WpMediaItemSortInput = {
  fields?: InputMaybe<Array<InputMaybe<WpMediaItemFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type WpPageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpPageEdge>;
  nodes: Array<WpPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<WpPageGroupConnection>;
};


export type WpPageConnectionDistinctArgs = {
  field: WpPageFieldsEnum;
};


export type WpPageConnectionMaxArgs = {
  field: WpPageFieldsEnum;
};


export type WpPageConnectionMinArgs = {
  field: WpPageFieldsEnum;
};


export type WpPageConnectionSumArgs = {
  field: WpPageFieldsEnum;
};


export type WpPageConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: WpPageFieldsEnum;
};

export type WpPageEdge = {
  next?: Maybe<WpPage>;
  node: WpPage;
  previous?: Maybe<WpPage>;
};

export type WpPageFieldsEnum =
  | 'ancestors___nodes'
  | 'ancestors___nodes___contentTypeName'
  | 'ancestors___nodes___databaseId'
  | 'ancestors___nodes___date'
  | 'ancestors___nodes___dateGmt'
  | 'ancestors___nodes___desiredSlug'
  | 'ancestors___nodes___enclosure'
  | 'ancestors___nodes___guid'
  | 'ancestors___nodes___id'
  | 'ancestors___nodes___isContentNode'
  | 'ancestors___nodes___isTermNode'
  | 'ancestors___nodes___link'
  | 'ancestors___nodes___modified'
  | 'ancestors___nodes___modifiedGmt'
  | 'ancestors___nodes___slug'
  | 'ancestors___nodes___status'
  | 'ancestors___nodes___template___templateName'
  | 'ancestors___nodes___uri'
  | 'ancestors___nodes___nodeType'
  | 'ancestors___nodes___parent___id'
  | 'ancestors___nodes___parent___children'
  | 'ancestors___nodes___children'
  | 'ancestors___nodes___children___id'
  | 'ancestors___nodes___children___children'
  | 'ancestors___nodes___internal___content'
  | 'ancestors___nodes___internal___contentDigest'
  | 'ancestors___nodes___internal___description'
  | 'ancestors___nodes___internal___fieldOwners'
  | 'ancestors___nodes___internal___ignoreType'
  | 'ancestors___nodes___internal___mediaType'
  | 'ancestors___nodes___internal___owner'
  | 'ancestors___nodes___internal___type'
  | 'author___node___avatar___default'
  | 'author___node___avatar___extraAttr'
  | 'author___node___avatar___forceDefault'
  | 'author___node___avatar___foundAvatar'
  | 'author___node___avatar___height'
  | 'author___node___avatar___rating'
  | 'author___node___avatar___scheme'
  | 'author___node___avatar___size'
  | 'author___node___avatar___url'
  | 'author___node___avatar___width'
  | 'author___node___capKey'
  | 'author___node___capabilities'
  | 'author___node___comments___nodes'
  | 'author___node___databaseId'
  | 'author___node___description'
  | 'author___node___email'
  | 'author___node___extraCapabilities'
  | 'author___node___firstName'
  | 'author___node___id'
  | 'author___node___isContentNode'
  | 'author___node___isTermNode'
  | 'author___node___lastName'
  | 'author___node___locale'
  | 'author___node___name'
  | 'author___node___nicename'
  | 'author___node___nickname'
  | 'author___node___pages___nodes'
  | 'author___node___posts___nodes'
  | 'author___node___registeredDate'
  | 'author___node___roles___nodes'
  | 'author___node___slug'
  | 'author___node___uri'
  | 'author___node___url'
  | 'author___node___username'
  | 'author___node___nodeType'
  | 'author___node___parent___id'
  | 'author___node___parent___children'
  | 'author___node___children'
  | 'author___node___children___id'
  | 'author___node___children___children'
  | 'author___node___internal___content'
  | 'author___node___internal___contentDigest'
  | 'author___node___internal___description'
  | 'author___node___internal___fieldOwners'
  | 'author___node___internal___ignoreType'
  | 'author___node___internal___mediaType'
  | 'author___node___internal___owner'
  | 'author___node___internal___type'
  | 'authorDatabaseId'
  | 'authorId'
  | 'wpChildren___nodes'
  | 'wpChildren___nodes___contentTypeName'
  | 'wpChildren___nodes___databaseId'
  | 'wpChildren___nodes___date'
  | 'wpChildren___nodes___dateGmt'
  | 'wpChildren___nodes___desiredSlug'
  | 'wpChildren___nodes___enclosure'
  | 'wpChildren___nodes___guid'
  | 'wpChildren___nodes___id'
  | 'wpChildren___nodes___isContentNode'
  | 'wpChildren___nodes___isTermNode'
  | 'wpChildren___nodes___link'
  | 'wpChildren___nodes___modified'
  | 'wpChildren___nodes___modifiedGmt'
  | 'wpChildren___nodes___slug'
  | 'wpChildren___nodes___status'
  | 'wpChildren___nodes___template___templateName'
  | 'wpChildren___nodes___uri'
  | 'wpChildren___nodes___nodeType'
  | 'wpChildren___nodes___parent___id'
  | 'wpChildren___nodes___parent___children'
  | 'wpChildren___nodes___children'
  | 'wpChildren___nodes___children___id'
  | 'wpChildren___nodes___children___children'
  | 'wpChildren___nodes___internal___content'
  | 'wpChildren___nodes___internal___contentDigest'
  | 'wpChildren___nodes___internal___description'
  | 'wpChildren___nodes___internal___fieldOwners'
  | 'wpChildren___nodes___internal___ignoreType'
  | 'wpChildren___nodes___internal___mediaType'
  | 'wpChildren___nodes___internal___owner'
  | 'wpChildren___nodes___internal___type'
  | 'commentCount'
  | 'commentStatus'
  | 'comments___nodes'
  | 'comments___nodes___agent'
  | 'comments___nodes___approved'
  | 'comments___nodes___authorIp'
  | 'comments___nodes___content'
  | 'comments___nodes___databaseId'
  | 'comments___nodes___date'
  | 'comments___nodes___dateGmt'
  | 'comments___nodes___id'
  | 'comments___nodes___karma'
  | 'comments___nodes___parentDatabaseId'
  | 'comments___nodes___parentId'
  | 'comments___nodes___replies___nodes'
  | 'comments___nodes___type'
  | 'comments___nodes___nodeType'
  | 'comments___nodes___parent___id'
  | 'comments___nodes___parent___children'
  | 'comments___nodes___children'
  | 'comments___nodes___children___id'
  | 'comments___nodes___children___children'
  | 'comments___nodes___internal___content'
  | 'comments___nodes___internal___contentDigest'
  | 'comments___nodes___internal___description'
  | 'comments___nodes___internal___fieldOwners'
  | 'comments___nodes___internal___ignoreType'
  | 'comments___nodes___internal___mediaType'
  | 'comments___nodes___internal___owner'
  | 'comments___nodes___internal___type'
  | 'content'
  | 'contentType___node___archivePath'
  | 'contentType___node___canExport'
  | 'contentType___node___connectedTaxonomies___nodes'
  | 'contentType___node___contentNodes___nodes'
  | 'contentType___node___deleteWithUser'
  | 'contentType___node___description'
  | 'contentType___node___excludeFromSearch'
  | 'contentType___node___graphqlPluralName'
  | 'contentType___node___graphqlSingleName'
  | 'contentType___node___hasArchive'
  | 'contentType___node___hierarchical'
  | 'contentType___node___id'
  | 'contentType___node___isContentNode'
  | 'contentType___node___isFrontPage'
  | 'contentType___node___isPostsPage'
  | 'contentType___node___isTermNode'
  | 'contentType___node___label'
  | 'contentType___node___labels___addNew'
  | 'contentType___node___labels___addNewItem'
  | 'contentType___node___labels___allItems'
  | 'contentType___node___labels___archives'
  | 'contentType___node___labels___attributes'
  | 'contentType___node___labels___editItem'
  | 'contentType___node___labels___featuredImage'
  | 'contentType___node___labels___filterItemsList'
  | 'contentType___node___labels___insertIntoItem'
  | 'contentType___node___labels___itemsList'
  | 'contentType___node___labels___itemsListNavigation'
  | 'contentType___node___labels___menuName'
  | 'contentType___node___labels___name'
  | 'contentType___node___labels___newItem'
  | 'contentType___node___labels___notFound'
  | 'contentType___node___labels___notFoundInTrash'
  | 'contentType___node___labels___parentItemColon'
  | 'contentType___node___labels___removeFeaturedImage'
  | 'contentType___node___labels___searchItems'
  | 'contentType___node___labels___setFeaturedImage'
  | 'contentType___node___labels___singularName'
  | 'contentType___node___labels___uploadedToThisItem'
  | 'contentType___node___labels___useFeaturedImage'
  | 'contentType___node___labels___viewItem'
  | 'contentType___node___labels___viewItems'
  | 'contentType___node___menuIcon'
  | 'contentType___node___menuPosition'
  | 'contentType___node___name'
  | 'contentType___node___public'
  | 'contentType___node___publiclyQueryable'
  | 'contentType___node___restBase'
  | 'contentType___node___restControllerClass'
  | 'contentType___node___showInAdminBar'
  | 'contentType___node___showInGraphql'
  | 'contentType___node___showInMenu'
  | 'contentType___node___showInNavMenus'
  | 'contentType___node___showInRest'
  | 'contentType___node___showUi'
  | 'contentType___node___uri'
  | 'contentType___node___nodeType'
  | 'contentType___node___parent___id'
  | 'contentType___node___parent___children'
  | 'contentType___node___children'
  | 'contentType___node___children___id'
  | 'contentType___node___children___children'
  | 'contentType___node___internal___content'
  | 'contentType___node___internal___contentDigest'
  | 'contentType___node___internal___description'
  | 'contentType___node___internal___fieldOwners'
  | 'contentType___node___internal___ignoreType'
  | 'contentType___node___internal___mediaType'
  | 'contentType___node___internal___owner'
  | 'contentType___node___internal___type'
  | 'contentTypeName'
  | 'databaseId'
  | 'date'
  | 'dateGmt'
  | 'desiredSlug'
  | 'enclosure'
  | 'featuredImage___node___altText'
  | 'featuredImage___node___ancestors___nodes'
  | 'featuredImage___node___authorDatabaseId'
  | 'featuredImage___node___authorId'
  | 'featuredImage___node___caption'
  | 'featuredImage___node___wpChildren___nodes'
  | 'featuredImage___node___commentCount'
  | 'featuredImage___node___commentStatus'
  | 'featuredImage___node___comments___nodes'
  | 'featuredImage___node___contentTypeName'
  | 'featuredImage___node___databaseId'
  | 'featuredImage___node___date'
  | 'featuredImage___node___dateGmt'
  | 'featuredImage___node___description'
  | 'featuredImage___node___desiredSlug'
  | 'featuredImage___node___enclosure'
  | 'featuredImage___node___fileSize'
  | 'featuredImage___node___guid'
  | 'featuredImage___node___id'
  | 'featuredImage___node___isContentNode'
  | 'featuredImage___node___isTermNode'
  | 'featuredImage___node___link'
  | 'featuredImage___node___mediaDetails___file'
  | 'featuredImage___node___mediaDetails___height'
  | 'featuredImage___node___mediaDetails___sizes'
  | 'featuredImage___node___mediaDetails___width'
  | 'featuredImage___node___mediaItemUrl'
  | 'featuredImage___node___mediaType'
  | 'featuredImage___node___mimeType'
  | 'featuredImage___node___modified'
  | 'featuredImage___node___modifiedGmt'
  | 'featuredImage___node___parentDatabaseId'
  | 'featuredImage___node___parentId'
  | 'featuredImage___node___sizes'
  | 'featuredImage___node___slug'
  | 'featuredImage___node___sourceUrl'
  | 'featuredImage___node___srcSet'
  | 'featuredImage___node___status'
  | 'featuredImage___node___template___templateName'
  | 'featuredImage___node___title'
  | 'featuredImage___node___uri'
  | 'featuredImage___node___nodeType'
  | 'featuredImage___node___remoteFile___sourceInstanceName'
  | 'featuredImage___node___remoteFile___absolutePath'
  | 'featuredImage___node___remoteFile___relativePath'
  | 'featuredImage___node___remoteFile___extension'
  | 'featuredImage___node___remoteFile___size'
  | 'featuredImage___node___remoteFile___prettySize'
  | 'featuredImage___node___remoteFile___modifiedTime'
  | 'featuredImage___node___remoteFile___accessTime'
  | 'featuredImage___node___remoteFile___changeTime'
  | 'featuredImage___node___remoteFile___birthTime'
  | 'featuredImage___node___remoteFile___root'
  | 'featuredImage___node___remoteFile___dir'
  | 'featuredImage___node___remoteFile___base'
  | 'featuredImage___node___remoteFile___ext'
  | 'featuredImage___node___remoteFile___name'
  | 'featuredImage___node___remoteFile___relativeDirectory'
  | 'featuredImage___node___remoteFile___dev'
  | 'featuredImage___node___remoteFile___mode'
  | 'featuredImage___node___remoteFile___nlink'
  | 'featuredImage___node___remoteFile___uid'
  | 'featuredImage___node___remoteFile___gid'
  | 'featuredImage___node___remoteFile___rdev'
  | 'featuredImage___node___remoteFile___ino'
  | 'featuredImage___node___remoteFile___atimeMs'
  | 'featuredImage___node___remoteFile___mtimeMs'
  | 'featuredImage___node___remoteFile___ctimeMs'
  | 'featuredImage___node___remoteFile___atime'
  | 'featuredImage___node___remoteFile___mtime'
  | 'featuredImage___node___remoteFile___ctime'
  | 'featuredImage___node___remoteFile___birthtime'
  | 'featuredImage___node___remoteFile___birthtimeMs'
  | 'featuredImage___node___remoteFile___blksize'
  | 'featuredImage___node___remoteFile___blocks'
  | 'featuredImage___node___remoteFile___url'
  | 'featuredImage___node___remoteFile___publicURL'
  | 'featuredImage___node___remoteFile___childrenImageSharp'
  | 'featuredImage___node___remoteFile___id'
  | 'featuredImage___node___remoteFile___children'
  | 'featuredImage___node___localFile___sourceInstanceName'
  | 'featuredImage___node___localFile___absolutePath'
  | 'featuredImage___node___localFile___relativePath'
  | 'featuredImage___node___localFile___extension'
  | 'featuredImage___node___localFile___size'
  | 'featuredImage___node___localFile___prettySize'
  | 'featuredImage___node___localFile___modifiedTime'
  | 'featuredImage___node___localFile___accessTime'
  | 'featuredImage___node___localFile___changeTime'
  | 'featuredImage___node___localFile___birthTime'
  | 'featuredImage___node___localFile___root'
  | 'featuredImage___node___localFile___dir'
  | 'featuredImage___node___localFile___base'
  | 'featuredImage___node___localFile___ext'
  | 'featuredImage___node___localFile___name'
  | 'featuredImage___node___localFile___relativeDirectory'
  | 'featuredImage___node___localFile___dev'
  | 'featuredImage___node___localFile___mode'
  | 'featuredImage___node___localFile___nlink'
  | 'featuredImage___node___localFile___uid'
  | 'featuredImage___node___localFile___gid'
  | 'featuredImage___node___localFile___rdev'
  | 'featuredImage___node___localFile___ino'
  | 'featuredImage___node___localFile___atimeMs'
  | 'featuredImage___node___localFile___mtimeMs'
  | 'featuredImage___node___localFile___ctimeMs'
  | 'featuredImage___node___localFile___atime'
  | 'featuredImage___node___localFile___mtime'
  | 'featuredImage___node___localFile___ctime'
  | 'featuredImage___node___localFile___birthtime'
  | 'featuredImage___node___localFile___birthtimeMs'
  | 'featuredImage___node___localFile___blksize'
  | 'featuredImage___node___localFile___blocks'
  | 'featuredImage___node___localFile___url'
  | 'featuredImage___node___localFile___publicURL'
  | 'featuredImage___node___localFile___childrenImageSharp'
  | 'featuredImage___node___localFile___id'
  | 'featuredImage___node___localFile___children'
  | 'featuredImage___node___parent___id'
  | 'featuredImage___node___parent___children'
  | 'featuredImage___node___children'
  | 'featuredImage___node___children___id'
  | 'featuredImage___node___children___children'
  | 'featuredImage___node___internal___content'
  | 'featuredImage___node___internal___contentDigest'
  | 'featuredImage___node___internal___description'
  | 'featuredImage___node___internal___fieldOwners'
  | 'featuredImage___node___internal___ignoreType'
  | 'featuredImage___node___internal___mediaType'
  | 'featuredImage___node___internal___owner'
  | 'featuredImage___node___internal___type'
  | 'featuredImage___node___filename'
  | 'featuredImage___node___filesize'
  | 'featuredImage___node___width'
  | 'featuredImage___node___height'
  | 'featuredImage___node___publicUrl'
  | 'featuredImage___node___resize___width'
  | 'featuredImage___node___resize___height'
  | 'featuredImage___node___resize___src'
  | 'featuredImage___node___gatsbyImage'
  | 'featuredImageDatabaseId'
  | 'featuredImageId'
  | 'guid'
  | 'id'
  | 'isContentNode'
  | 'isFrontPage'
  | 'isPostsPage'
  | 'isPrivacyPage'
  | 'isRevision'
  | 'isTermNode'
  | 'language___code'
  | 'language___homeUrl'
  | 'language___id'
  | 'language___locale'
  | 'language___name'
  | 'language___slug'
  | 'lastEditedBy___node___avatar___default'
  | 'lastEditedBy___node___avatar___extraAttr'
  | 'lastEditedBy___node___avatar___forceDefault'
  | 'lastEditedBy___node___avatar___foundAvatar'
  | 'lastEditedBy___node___avatar___height'
  | 'lastEditedBy___node___avatar___rating'
  | 'lastEditedBy___node___avatar___scheme'
  | 'lastEditedBy___node___avatar___size'
  | 'lastEditedBy___node___avatar___url'
  | 'lastEditedBy___node___avatar___width'
  | 'lastEditedBy___node___capKey'
  | 'lastEditedBy___node___capabilities'
  | 'lastEditedBy___node___comments___nodes'
  | 'lastEditedBy___node___databaseId'
  | 'lastEditedBy___node___description'
  | 'lastEditedBy___node___email'
  | 'lastEditedBy___node___extraCapabilities'
  | 'lastEditedBy___node___firstName'
  | 'lastEditedBy___node___id'
  | 'lastEditedBy___node___isContentNode'
  | 'lastEditedBy___node___isTermNode'
  | 'lastEditedBy___node___lastName'
  | 'lastEditedBy___node___locale'
  | 'lastEditedBy___node___name'
  | 'lastEditedBy___node___nicename'
  | 'lastEditedBy___node___nickname'
  | 'lastEditedBy___node___pages___nodes'
  | 'lastEditedBy___node___posts___nodes'
  | 'lastEditedBy___node___registeredDate'
  | 'lastEditedBy___node___roles___nodes'
  | 'lastEditedBy___node___slug'
  | 'lastEditedBy___node___uri'
  | 'lastEditedBy___node___url'
  | 'lastEditedBy___node___username'
  | 'lastEditedBy___node___nodeType'
  | 'lastEditedBy___node___parent___id'
  | 'lastEditedBy___node___parent___children'
  | 'lastEditedBy___node___children'
  | 'lastEditedBy___node___children___id'
  | 'lastEditedBy___node___children___children'
  | 'lastEditedBy___node___internal___content'
  | 'lastEditedBy___node___internal___contentDigest'
  | 'lastEditedBy___node___internal___description'
  | 'lastEditedBy___node___internal___fieldOwners'
  | 'lastEditedBy___node___internal___ignoreType'
  | 'lastEditedBy___node___internal___mediaType'
  | 'lastEditedBy___node___internal___owner'
  | 'lastEditedBy___node___internal___type'
  | 'link'
  | 'menuOrder'
  | 'modified'
  | 'modifiedGmt'
  | 'wpParent___node___contentTypeName'
  | 'wpParent___node___databaseId'
  | 'wpParent___node___date'
  | 'wpParent___node___dateGmt'
  | 'wpParent___node___desiredSlug'
  | 'wpParent___node___enclosure'
  | 'wpParent___node___guid'
  | 'wpParent___node___id'
  | 'wpParent___node___isContentNode'
  | 'wpParent___node___isTermNode'
  | 'wpParent___node___link'
  | 'wpParent___node___modified'
  | 'wpParent___node___modifiedGmt'
  | 'wpParent___node___slug'
  | 'wpParent___node___status'
  | 'wpParent___node___template___templateName'
  | 'wpParent___node___uri'
  | 'wpParent___node___nodeType'
  | 'wpParent___node___parent___id'
  | 'wpParent___node___parent___children'
  | 'wpParent___node___children'
  | 'wpParent___node___children___id'
  | 'wpParent___node___children___children'
  | 'wpParent___node___internal___content'
  | 'wpParent___node___internal___contentDigest'
  | 'wpParent___node___internal___description'
  | 'wpParent___node___internal___fieldOwners'
  | 'wpParent___node___internal___ignoreType'
  | 'wpParent___node___internal___mediaType'
  | 'wpParent___node___internal___owner'
  | 'wpParent___node___internal___type'
  | 'parentDatabaseId'
  | 'parentId'
  | 'slug'
  | 'status'
  | 'template___templateName'
  | 'terms___nodes'
  | 'terms___nodes___count'
  | 'terms___nodes___databaseId'
  | 'terms___nodes___description'
  | 'terms___nodes___id'
  | 'terms___nodes___isContentNode'
  | 'terms___nodes___isTermNode'
  | 'terms___nodes___link'
  | 'terms___nodes___name'
  | 'terms___nodes___slug'
  | 'terms___nodes___taxonomyName'
  | 'terms___nodes___termGroupId'
  | 'terms___nodes___termTaxonomyId'
  | 'terms___nodes___uri'
  | 'terms___nodes___nodeType'
  | 'terms___nodes___parent___id'
  | 'terms___nodes___parent___children'
  | 'terms___nodes___children'
  | 'terms___nodes___children___id'
  | 'terms___nodes___children___children'
  | 'terms___nodes___internal___content'
  | 'terms___nodes___internal___contentDigest'
  | 'terms___nodes___internal___description'
  | 'terms___nodes___internal___fieldOwners'
  | 'terms___nodes___internal___ignoreType'
  | 'terms___nodes___internal___mediaType'
  | 'terms___nodes___internal___owner'
  | 'terms___nodes___internal___type'
  | 'title'
  | 'translations'
  | 'translations___ancestors___nodes'
  | 'translations___ancestors___nodes___contentTypeName'
  | 'translations___ancestors___nodes___databaseId'
  | 'translations___ancestors___nodes___date'
  | 'translations___ancestors___nodes___dateGmt'
  | 'translations___ancestors___nodes___desiredSlug'
  | 'translations___ancestors___nodes___enclosure'
  | 'translations___ancestors___nodes___guid'
  | 'translations___ancestors___nodes___id'
  | 'translations___ancestors___nodes___isContentNode'
  | 'translations___ancestors___nodes___isTermNode'
  | 'translations___ancestors___nodes___link'
  | 'translations___ancestors___nodes___modified'
  | 'translations___ancestors___nodes___modifiedGmt'
  | 'translations___ancestors___nodes___slug'
  | 'translations___ancestors___nodes___status'
  | 'translations___ancestors___nodes___uri'
  | 'translations___ancestors___nodes___nodeType'
  | 'translations___ancestors___nodes___children'
  | 'translations___author___node___capKey'
  | 'translations___author___node___capabilities'
  | 'translations___author___node___databaseId'
  | 'translations___author___node___description'
  | 'translations___author___node___email'
  | 'translations___author___node___extraCapabilities'
  | 'translations___author___node___firstName'
  | 'translations___author___node___id'
  | 'translations___author___node___isContentNode'
  | 'translations___author___node___isTermNode'
  | 'translations___author___node___lastName'
  | 'translations___author___node___locale'
  | 'translations___author___node___name'
  | 'translations___author___node___nicename'
  | 'translations___author___node___nickname'
  | 'translations___author___node___registeredDate'
  | 'translations___author___node___slug'
  | 'translations___author___node___uri'
  | 'translations___author___node___url'
  | 'translations___author___node___username'
  | 'translations___author___node___nodeType'
  | 'translations___author___node___children'
  | 'translations___authorDatabaseId'
  | 'translations___authorId'
  | 'translations___wpChildren___nodes'
  | 'translations___wpChildren___nodes___contentTypeName'
  | 'translations___wpChildren___nodes___databaseId'
  | 'translations___wpChildren___nodes___date'
  | 'translations___wpChildren___nodes___dateGmt'
  | 'translations___wpChildren___nodes___desiredSlug'
  | 'translations___wpChildren___nodes___enclosure'
  | 'translations___wpChildren___nodes___guid'
  | 'translations___wpChildren___nodes___id'
  | 'translations___wpChildren___nodes___isContentNode'
  | 'translations___wpChildren___nodes___isTermNode'
  | 'translations___wpChildren___nodes___link'
  | 'translations___wpChildren___nodes___modified'
  | 'translations___wpChildren___nodes___modifiedGmt'
  | 'translations___wpChildren___nodes___slug'
  | 'translations___wpChildren___nodes___status'
  | 'translations___wpChildren___nodes___uri'
  | 'translations___wpChildren___nodes___nodeType'
  | 'translations___wpChildren___nodes___children'
  | 'translations___commentCount'
  | 'translations___commentStatus'
  | 'translations___comments___nodes'
  | 'translations___comments___nodes___agent'
  | 'translations___comments___nodes___approved'
  | 'translations___comments___nodes___authorIp'
  | 'translations___comments___nodes___content'
  | 'translations___comments___nodes___databaseId'
  | 'translations___comments___nodes___date'
  | 'translations___comments___nodes___dateGmt'
  | 'translations___comments___nodes___id'
  | 'translations___comments___nodes___karma'
  | 'translations___comments___nodes___parentDatabaseId'
  | 'translations___comments___nodes___parentId'
  | 'translations___comments___nodes___type'
  | 'translations___comments___nodes___nodeType'
  | 'translations___comments___nodes___children'
  | 'translations___content'
  | 'translations___contentType___node___archivePath'
  | 'translations___contentType___node___canExport'
  | 'translations___contentType___node___deleteWithUser'
  | 'translations___contentType___node___description'
  | 'translations___contentType___node___excludeFromSearch'
  | 'translations___contentType___node___graphqlPluralName'
  | 'translations___contentType___node___graphqlSingleName'
  | 'translations___contentType___node___hasArchive'
  | 'translations___contentType___node___hierarchical'
  | 'translations___contentType___node___id'
  | 'translations___contentType___node___isContentNode'
  | 'translations___contentType___node___isFrontPage'
  | 'translations___contentType___node___isPostsPage'
  | 'translations___contentType___node___isTermNode'
  | 'translations___contentType___node___label'
  | 'translations___contentType___node___menuIcon'
  | 'translations___contentType___node___menuPosition'
  | 'translations___contentType___node___name'
  | 'translations___contentType___node___public'
  | 'translations___contentType___node___publiclyQueryable'
  | 'translations___contentType___node___restBase'
  | 'translations___contentType___node___restControllerClass'
  | 'translations___contentType___node___showInAdminBar'
  | 'translations___contentType___node___showInGraphql'
  | 'translations___contentType___node___showInMenu'
  | 'translations___contentType___node___showInNavMenus'
  | 'translations___contentType___node___showInRest'
  | 'translations___contentType___node___showUi'
  | 'translations___contentType___node___uri'
  | 'translations___contentType___node___nodeType'
  | 'translations___contentType___node___children'
  | 'translations___contentTypeName'
  | 'translations___databaseId'
  | 'translations___date'
  | 'translations___dateGmt'
  | 'translations___desiredSlug'
  | 'translations___enclosure'
  | 'translations___featuredImage___node___altText'
  | 'translations___featuredImage___node___authorDatabaseId'
  | 'translations___featuredImage___node___authorId'
  | 'translations___featuredImage___node___caption'
  | 'translations___featuredImage___node___commentCount'
  | 'translations___featuredImage___node___commentStatus'
  | 'translations___featuredImage___node___contentTypeName'
  | 'translations___featuredImage___node___databaseId'
  | 'translations___featuredImage___node___date'
  | 'translations___featuredImage___node___dateGmt'
  | 'translations___featuredImage___node___description'
  | 'translations___featuredImage___node___desiredSlug'
  | 'translations___featuredImage___node___enclosure'
  | 'translations___featuredImage___node___fileSize'
  | 'translations___featuredImage___node___guid'
  | 'translations___featuredImage___node___id'
  | 'translations___featuredImage___node___isContentNode'
  | 'translations___featuredImage___node___isTermNode'
  | 'translations___featuredImage___node___link'
  | 'translations___featuredImage___node___mediaItemUrl'
  | 'translations___featuredImage___node___mediaType'
  | 'translations___featuredImage___node___mimeType'
  | 'translations___featuredImage___node___modified'
  | 'translations___featuredImage___node___modifiedGmt'
  | 'translations___featuredImage___node___parentDatabaseId'
  | 'translations___featuredImage___node___parentId'
  | 'translations___featuredImage___node___sizes'
  | 'translations___featuredImage___node___slug'
  | 'translations___featuredImage___node___sourceUrl'
  | 'translations___featuredImage___node___srcSet'
  | 'translations___featuredImage___node___status'
  | 'translations___featuredImage___node___title'
  | 'translations___featuredImage___node___uri'
  | 'translations___featuredImage___node___nodeType'
  | 'translations___featuredImage___node___children'
  | 'translations___featuredImage___node___filename'
  | 'translations___featuredImage___node___filesize'
  | 'translations___featuredImage___node___width'
  | 'translations___featuredImage___node___height'
  | 'translations___featuredImage___node___publicUrl'
  | 'translations___featuredImage___node___gatsbyImage'
  | 'translations___featuredImageDatabaseId'
  | 'translations___featuredImageId'
  | 'translations___guid'
  | 'translations___id'
  | 'translations___isContentNode'
  | 'translations___isFrontPage'
  | 'translations___isPostsPage'
  | 'translations___isPrivacyPage'
  | 'translations___isRevision'
  | 'translations___isTermNode'
  | 'translations___language___code'
  | 'translations___language___homeUrl'
  | 'translations___language___id'
  | 'translations___language___locale'
  | 'translations___language___name'
  | 'translations___language___slug'
  | 'translations___lastEditedBy___node___capKey'
  | 'translations___lastEditedBy___node___capabilities'
  | 'translations___lastEditedBy___node___databaseId'
  | 'translations___lastEditedBy___node___description'
  | 'translations___lastEditedBy___node___email'
  | 'translations___lastEditedBy___node___extraCapabilities'
  | 'translations___lastEditedBy___node___firstName'
  | 'translations___lastEditedBy___node___id'
  | 'translations___lastEditedBy___node___isContentNode'
  | 'translations___lastEditedBy___node___isTermNode'
  | 'translations___lastEditedBy___node___lastName'
  | 'translations___lastEditedBy___node___locale'
  | 'translations___lastEditedBy___node___name'
  | 'translations___lastEditedBy___node___nicename'
  | 'translations___lastEditedBy___node___nickname'
  | 'translations___lastEditedBy___node___registeredDate'
  | 'translations___lastEditedBy___node___slug'
  | 'translations___lastEditedBy___node___uri'
  | 'translations___lastEditedBy___node___url'
  | 'translations___lastEditedBy___node___username'
  | 'translations___lastEditedBy___node___nodeType'
  | 'translations___lastEditedBy___node___children'
  | 'translations___link'
  | 'translations___menuOrder'
  | 'translations___modified'
  | 'translations___modifiedGmt'
  | 'translations___wpParent___node___contentTypeName'
  | 'translations___wpParent___node___databaseId'
  | 'translations___wpParent___node___date'
  | 'translations___wpParent___node___dateGmt'
  | 'translations___wpParent___node___desiredSlug'
  | 'translations___wpParent___node___enclosure'
  | 'translations___wpParent___node___guid'
  | 'translations___wpParent___node___id'
  | 'translations___wpParent___node___isContentNode'
  | 'translations___wpParent___node___isTermNode'
  | 'translations___wpParent___node___link'
  | 'translations___wpParent___node___modified'
  | 'translations___wpParent___node___modifiedGmt'
  | 'translations___wpParent___node___slug'
  | 'translations___wpParent___node___status'
  | 'translations___wpParent___node___uri'
  | 'translations___wpParent___node___nodeType'
  | 'translations___wpParent___node___children'
  | 'translations___parentDatabaseId'
  | 'translations___parentId'
  | 'translations___slug'
  | 'translations___status'
  | 'translations___template___templateName'
  | 'translations___terms___nodes'
  | 'translations___terms___nodes___count'
  | 'translations___terms___nodes___databaseId'
  | 'translations___terms___nodes___description'
  | 'translations___terms___nodes___id'
  | 'translations___terms___nodes___isContentNode'
  | 'translations___terms___nodes___isTermNode'
  | 'translations___terms___nodes___link'
  | 'translations___terms___nodes___name'
  | 'translations___terms___nodes___slug'
  | 'translations___terms___nodes___taxonomyName'
  | 'translations___terms___nodes___termGroupId'
  | 'translations___terms___nodes___termTaxonomyId'
  | 'translations___terms___nodes___uri'
  | 'translations___terms___nodes___nodeType'
  | 'translations___terms___nodes___children'
  | 'translations___title'
  | 'translations___translations'
  | 'translations___translations___ancestors___nodes'
  | 'translations___translations___authorDatabaseId'
  | 'translations___translations___authorId'
  | 'translations___translations___wpChildren___nodes'
  | 'translations___translations___commentCount'
  | 'translations___translations___commentStatus'
  | 'translations___translations___comments___nodes'
  | 'translations___translations___content'
  | 'translations___translations___contentTypeName'
  | 'translations___translations___databaseId'
  | 'translations___translations___date'
  | 'translations___translations___dateGmt'
  | 'translations___translations___desiredSlug'
  | 'translations___translations___enclosure'
  | 'translations___translations___featuredImageDatabaseId'
  | 'translations___translations___featuredImageId'
  | 'translations___translations___guid'
  | 'translations___translations___id'
  | 'translations___translations___isContentNode'
  | 'translations___translations___isFrontPage'
  | 'translations___translations___isPostsPage'
  | 'translations___translations___isPrivacyPage'
  | 'translations___translations___isRevision'
  | 'translations___translations___isTermNode'
  | 'translations___translations___language___code'
  | 'translations___translations___language___homeUrl'
  | 'translations___translations___language___id'
  | 'translations___translations___language___locale'
  | 'translations___translations___language___name'
  | 'translations___translations___language___slug'
  | 'translations___translations___link'
  | 'translations___translations___menuOrder'
  | 'translations___translations___modified'
  | 'translations___translations___modifiedGmt'
  | 'translations___translations___parentDatabaseId'
  | 'translations___translations___parentId'
  | 'translations___translations___slug'
  | 'translations___translations___status'
  | 'translations___translations___template___templateName'
  | 'translations___translations___terms___nodes'
  | 'translations___translations___title'
  | 'translations___translations___translations'
  | 'translations___translations___translations___authorDatabaseId'
  | 'translations___translations___translations___authorId'
  | 'translations___translations___translations___commentCount'
  | 'translations___translations___translations___commentStatus'
  | 'translations___translations___translations___content'
  | 'translations___translations___translations___contentTypeName'
  | 'translations___translations___translations___databaseId'
  | 'translations___translations___translations___date'
  | 'translations___translations___translations___dateGmt'
  | 'translations___translations___translations___desiredSlug'
  | 'translations___translations___translations___enclosure'
  | 'translations___translations___translations___featuredImageDatabaseId'
  | 'translations___translations___translations___featuredImageId'
  | 'translations___translations___translations___guid'
  | 'translations___translations___translations___id'
  | 'translations___translations___translations___isContentNode'
  | 'translations___translations___translations___isFrontPage'
  | 'translations___translations___translations___isPostsPage'
  | 'translations___translations___translations___isPrivacyPage'
  | 'translations___translations___translations___isRevision'
  | 'translations___translations___translations___isTermNode'
  | 'translations___translations___translations___link'
  | 'translations___translations___translations___menuOrder'
  | 'translations___translations___translations___modified'
  | 'translations___translations___translations___modifiedGmt'
  | 'translations___translations___translations___parentDatabaseId'
  | 'translations___translations___translations___parentId'
  | 'translations___translations___translations___slug'
  | 'translations___translations___translations___status'
  | 'translations___translations___translations___title'
  | 'translations___translations___translations___translations'
  | 'translations___translations___translations___uri'
  | 'translations___translations___translations___nodeType'
  | 'translations___translations___translations___children'
  | 'translations___translations___uri'
  | 'translations___translations___nodeType'
  | 'translations___translations___parent___id'
  | 'translations___translations___parent___children'
  | 'translations___translations___children'
  | 'translations___translations___children___id'
  | 'translations___translations___children___children'
  | 'translations___translations___internal___content'
  | 'translations___translations___internal___contentDigest'
  | 'translations___translations___internal___description'
  | 'translations___translations___internal___fieldOwners'
  | 'translations___translations___internal___ignoreType'
  | 'translations___translations___internal___mediaType'
  | 'translations___translations___internal___owner'
  | 'translations___translations___internal___type'
  | 'translations___uri'
  | 'translations___nodeType'
  | 'translations___parent___id'
  | 'translations___parent___parent___id'
  | 'translations___parent___parent___children'
  | 'translations___parent___children'
  | 'translations___parent___children___id'
  | 'translations___parent___children___children'
  | 'translations___parent___internal___content'
  | 'translations___parent___internal___contentDigest'
  | 'translations___parent___internal___description'
  | 'translations___parent___internal___fieldOwners'
  | 'translations___parent___internal___ignoreType'
  | 'translations___parent___internal___mediaType'
  | 'translations___parent___internal___owner'
  | 'translations___parent___internal___type'
  | 'translations___children'
  | 'translations___children___id'
  | 'translations___children___parent___id'
  | 'translations___children___parent___children'
  | 'translations___children___children'
  | 'translations___children___children___id'
  | 'translations___children___children___children'
  | 'translations___children___internal___content'
  | 'translations___children___internal___contentDigest'
  | 'translations___children___internal___description'
  | 'translations___children___internal___fieldOwners'
  | 'translations___children___internal___ignoreType'
  | 'translations___children___internal___mediaType'
  | 'translations___children___internal___owner'
  | 'translations___children___internal___type'
  | 'translations___internal___content'
  | 'translations___internal___contentDigest'
  | 'translations___internal___description'
  | 'translations___internal___fieldOwners'
  | 'translations___internal___ignoreType'
  | 'translations___internal___mediaType'
  | 'translations___internal___owner'
  | 'translations___internal___type'
  | 'uri'
  | 'nodeType'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type WpPageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpPageEdge>;
  nodes: Array<WpPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<WpPageGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type WpPageGroupConnectionDistinctArgs = {
  field: WpPageFieldsEnum;
};


export type WpPageGroupConnectionMaxArgs = {
  field: WpPageFieldsEnum;
};


export type WpPageGroupConnectionMinArgs = {
  field: WpPageFieldsEnum;
};


export type WpPageGroupConnectionSumArgs = {
  field: WpPageFieldsEnum;
};


export type WpPageGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: WpPageFieldsEnum;
};

export type WpPageSortInput = {
  fields?: InputMaybe<Array<InputMaybe<WpPageFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type WpTermNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpTermNodeEdge>;
  nodes: Array<WpTermNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<WpTermNodeGroupConnection>;
};


export type WpTermNodeConnectionDistinctArgs = {
  field: WpTermNodeFieldsEnum;
};


export type WpTermNodeConnectionMaxArgs = {
  field: WpTermNodeFieldsEnum;
};


export type WpTermNodeConnectionMinArgs = {
  field: WpTermNodeFieldsEnum;
};


export type WpTermNodeConnectionSumArgs = {
  field: WpTermNodeFieldsEnum;
};


export type WpTermNodeConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: WpTermNodeFieldsEnum;
};

export type WpTermNodeEdge = {
  next?: Maybe<WpTermNode>;
  node: WpTermNode;
  previous?: Maybe<WpTermNode>;
};

export type WpTermNodeFieldsEnum =
  | 'count'
  | 'databaseId'
  | 'description'
  | 'id'
  | 'isContentNode'
  | 'isTermNode'
  | 'link'
  | 'name'
  | 'slug'
  | 'taxonomyName'
  | 'termGroupId'
  | 'termTaxonomyId'
  | 'uri'
  | 'nodeType'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type WpTermNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpTermNodeEdge>;
  nodes: Array<WpTermNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<WpTermNodeGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type WpTermNodeGroupConnectionDistinctArgs = {
  field: WpTermNodeFieldsEnum;
};


export type WpTermNodeGroupConnectionMaxArgs = {
  field: WpTermNodeFieldsEnum;
};


export type WpTermNodeGroupConnectionMinArgs = {
  field: WpTermNodeFieldsEnum;
};


export type WpTermNodeGroupConnectionSumArgs = {
  field: WpTermNodeFieldsEnum;
};


export type WpTermNodeGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: WpTermNodeFieldsEnum;
};

export type WpTermNodeSortInput = {
  fields?: InputMaybe<Array<InputMaybe<WpTermNodeFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type WpPostConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpPostEdge>;
  nodes: Array<WpPost>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<WpPostGroupConnection>;
};


export type WpPostConnectionDistinctArgs = {
  field: WpPostFieldsEnum;
};


export type WpPostConnectionMaxArgs = {
  field: WpPostFieldsEnum;
};


export type WpPostConnectionMinArgs = {
  field: WpPostFieldsEnum;
};


export type WpPostConnectionSumArgs = {
  field: WpPostFieldsEnum;
};


export type WpPostConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: WpPostFieldsEnum;
};

export type WpPostEdge = {
  next?: Maybe<WpPost>;
  node: WpPost;
  previous?: Maybe<WpPost>;
};

export type WpPostFieldsEnum =
  | 'author___node___avatar___default'
  | 'author___node___avatar___extraAttr'
  | 'author___node___avatar___forceDefault'
  | 'author___node___avatar___foundAvatar'
  | 'author___node___avatar___height'
  | 'author___node___avatar___rating'
  | 'author___node___avatar___scheme'
  | 'author___node___avatar___size'
  | 'author___node___avatar___url'
  | 'author___node___avatar___width'
  | 'author___node___capKey'
  | 'author___node___capabilities'
  | 'author___node___comments___nodes'
  | 'author___node___databaseId'
  | 'author___node___description'
  | 'author___node___email'
  | 'author___node___extraCapabilities'
  | 'author___node___firstName'
  | 'author___node___id'
  | 'author___node___isContentNode'
  | 'author___node___isTermNode'
  | 'author___node___lastName'
  | 'author___node___locale'
  | 'author___node___name'
  | 'author___node___nicename'
  | 'author___node___nickname'
  | 'author___node___pages___nodes'
  | 'author___node___posts___nodes'
  | 'author___node___registeredDate'
  | 'author___node___roles___nodes'
  | 'author___node___slug'
  | 'author___node___uri'
  | 'author___node___url'
  | 'author___node___username'
  | 'author___node___nodeType'
  | 'author___node___parent___id'
  | 'author___node___parent___children'
  | 'author___node___children'
  | 'author___node___children___id'
  | 'author___node___children___children'
  | 'author___node___internal___content'
  | 'author___node___internal___contentDigest'
  | 'author___node___internal___description'
  | 'author___node___internal___fieldOwners'
  | 'author___node___internal___ignoreType'
  | 'author___node___internal___mediaType'
  | 'author___node___internal___owner'
  | 'author___node___internal___type'
  | 'authorDatabaseId'
  | 'authorId'
  | 'categories___nodes'
  | 'categories___nodes___ancestors___nodes'
  | 'categories___nodes___wpChildren___nodes'
  | 'categories___nodes___contentNodes___nodes'
  | 'categories___nodes___count'
  | 'categories___nodes___databaseId'
  | 'categories___nodes___description'
  | 'categories___nodes___id'
  | 'categories___nodes___isContentNode'
  | 'categories___nodes___isTermNode'
  | 'categories___nodes___language___code'
  | 'categories___nodes___language___homeUrl'
  | 'categories___nodes___language___id'
  | 'categories___nodes___language___locale'
  | 'categories___nodes___language___name'
  | 'categories___nodes___language___slug'
  | 'categories___nodes___link'
  | 'categories___nodes___name'
  | 'categories___nodes___parentDatabaseId'
  | 'categories___nodes___parentId'
  | 'categories___nodes___posts___nodes'
  | 'categories___nodes___slug'
  | 'categories___nodes___taxonomyName'
  | 'categories___nodes___termGroupId'
  | 'categories___nodes___termTaxonomyId'
  | 'categories___nodes___translations'
  | 'categories___nodes___translations___count'
  | 'categories___nodes___translations___databaseId'
  | 'categories___nodes___translations___description'
  | 'categories___nodes___translations___id'
  | 'categories___nodes___translations___isContentNode'
  | 'categories___nodes___translations___isTermNode'
  | 'categories___nodes___translations___link'
  | 'categories___nodes___translations___name'
  | 'categories___nodes___translations___parentDatabaseId'
  | 'categories___nodes___translations___parentId'
  | 'categories___nodes___translations___slug'
  | 'categories___nodes___translations___taxonomyName'
  | 'categories___nodes___translations___termGroupId'
  | 'categories___nodes___translations___termTaxonomyId'
  | 'categories___nodes___translations___translations'
  | 'categories___nodes___translations___uri'
  | 'categories___nodes___translations___nodeType'
  | 'categories___nodes___translations___children'
  | 'categories___nodes___uri'
  | 'categories___nodes___nodeType'
  | 'categories___nodes___parent___id'
  | 'categories___nodes___parent___children'
  | 'categories___nodes___children'
  | 'categories___nodes___children___id'
  | 'categories___nodes___children___children'
  | 'categories___nodes___internal___content'
  | 'categories___nodes___internal___contentDigest'
  | 'categories___nodes___internal___description'
  | 'categories___nodes___internal___fieldOwners'
  | 'categories___nodes___internal___ignoreType'
  | 'categories___nodes___internal___mediaType'
  | 'categories___nodes___internal___owner'
  | 'categories___nodes___internal___type'
  | 'commentCount'
  | 'commentStatus'
  | 'comments___nodes'
  | 'comments___nodes___agent'
  | 'comments___nodes___approved'
  | 'comments___nodes___authorIp'
  | 'comments___nodes___content'
  | 'comments___nodes___databaseId'
  | 'comments___nodes___date'
  | 'comments___nodes___dateGmt'
  | 'comments___nodes___id'
  | 'comments___nodes___karma'
  | 'comments___nodes___parentDatabaseId'
  | 'comments___nodes___parentId'
  | 'comments___nodes___replies___nodes'
  | 'comments___nodes___type'
  | 'comments___nodes___nodeType'
  | 'comments___nodes___parent___id'
  | 'comments___nodes___parent___children'
  | 'comments___nodes___children'
  | 'comments___nodes___children___id'
  | 'comments___nodes___children___children'
  | 'comments___nodes___internal___content'
  | 'comments___nodes___internal___contentDigest'
  | 'comments___nodes___internal___description'
  | 'comments___nodes___internal___fieldOwners'
  | 'comments___nodes___internal___ignoreType'
  | 'comments___nodes___internal___mediaType'
  | 'comments___nodes___internal___owner'
  | 'comments___nodes___internal___type'
  | 'content'
  | 'contentType___node___archivePath'
  | 'contentType___node___canExport'
  | 'contentType___node___connectedTaxonomies___nodes'
  | 'contentType___node___contentNodes___nodes'
  | 'contentType___node___deleteWithUser'
  | 'contentType___node___description'
  | 'contentType___node___excludeFromSearch'
  | 'contentType___node___graphqlPluralName'
  | 'contentType___node___graphqlSingleName'
  | 'contentType___node___hasArchive'
  | 'contentType___node___hierarchical'
  | 'contentType___node___id'
  | 'contentType___node___isContentNode'
  | 'contentType___node___isFrontPage'
  | 'contentType___node___isPostsPage'
  | 'contentType___node___isTermNode'
  | 'contentType___node___label'
  | 'contentType___node___labels___addNew'
  | 'contentType___node___labels___addNewItem'
  | 'contentType___node___labels___allItems'
  | 'contentType___node___labels___archives'
  | 'contentType___node___labels___attributes'
  | 'contentType___node___labels___editItem'
  | 'contentType___node___labels___featuredImage'
  | 'contentType___node___labels___filterItemsList'
  | 'contentType___node___labels___insertIntoItem'
  | 'contentType___node___labels___itemsList'
  | 'contentType___node___labels___itemsListNavigation'
  | 'contentType___node___labels___menuName'
  | 'contentType___node___labels___name'
  | 'contentType___node___labels___newItem'
  | 'contentType___node___labels___notFound'
  | 'contentType___node___labels___notFoundInTrash'
  | 'contentType___node___labels___parentItemColon'
  | 'contentType___node___labels___removeFeaturedImage'
  | 'contentType___node___labels___searchItems'
  | 'contentType___node___labels___setFeaturedImage'
  | 'contentType___node___labels___singularName'
  | 'contentType___node___labels___uploadedToThisItem'
  | 'contentType___node___labels___useFeaturedImage'
  | 'contentType___node___labels___viewItem'
  | 'contentType___node___labels___viewItems'
  | 'contentType___node___menuIcon'
  | 'contentType___node___menuPosition'
  | 'contentType___node___name'
  | 'contentType___node___public'
  | 'contentType___node___publiclyQueryable'
  | 'contentType___node___restBase'
  | 'contentType___node___restControllerClass'
  | 'contentType___node___showInAdminBar'
  | 'contentType___node___showInGraphql'
  | 'contentType___node___showInMenu'
  | 'contentType___node___showInNavMenus'
  | 'contentType___node___showInRest'
  | 'contentType___node___showUi'
  | 'contentType___node___uri'
  | 'contentType___node___nodeType'
  | 'contentType___node___parent___id'
  | 'contentType___node___parent___children'
  | 'contentType___node___children'
  | 'contentType___node___children___id'
  | 'contentType___node___children___children'
  | 'contentType___node___internal___content'
  | 'contentType___node___internal___contentDigest'
  | 'contentType___node___internal___description'
  | 'contentType___node___internal___fieldOwners'
  | 'contentType___node___internal___ignoreType'
  | 'contentType___node___internal___mediaType'
  | 'contentType___node___internal___owner'
  | 'contentType___node___internal___type'
  | 'contentTypeName'
  | 'databaseId'
  | 'date'
  | 'dateGmt'
  | 'desiredSlug'
  | 'enclosure'
  | 'excerpt'
  | 'featuredImage___node___altText'
  | 'featuredImage___node___ancestors___nodes'
  | 'featuredImage___node___authorDatabaseId'
  | 'featuredImage___node___authorId'
  | 'featuredImage___node___caption'
  | 'featuredImage___node___wpChildren___nodes'
  | 'featuredImage___node___commentCount'
  | 'featuredImage___node___commentStatus'
  | 'featuredImage___node___comments___nodes'
  | 'featuredImage___node___contentTypeName'
  | 'featuredImage___node___databaseId'
  | 'featuredImage___node___date'
  | 'featuredImage___node___dateGmt'
  | 'featuredImage___node___description'
  | 'featuredImage___node___desiredSlug'
  | 'featuredImage___node___enclosure'
  | 'featuredImage___node___fileSize'
  | 'featuredImage___node___guid'
  | 'featuredImage___node___id'
  | 'featuredImage___node___isContentNode'
  | 'featuredImage___node___isTermNode'
  | 'featuredImage___node___link'
  | 'featuredImage___node___mediaDetails___file'
  | 'featuredImage___node___mediaDetails___height'
  | 'featuredImage___node___mediaDetails___sizes'
  | 'featuredImage___node___mediaDetails___width'
  | 'featuredImage___node___mediaItemUrl'
  | 'featuredImage___node___mediaType'
  | 'featuredImage___node___mimeType'
  | 'featuredImage___node___modified'
  | 'featuredImage___node___modifiedGmt'
  | 'featuredImage___node___parentDatabaseId'
  | 'featuredImage___node___parentId'
  | 'featuredImage___node___sizes'
  | 'featuredImage___node___slug'
  | 'featuredImage___node___sourceUrl'
  | 'featuredImage___node___srcSet'
  | 'featuredImage___node___status'
  | 'featuredImage___node___template___templateName'
  | 'featuredImage___node___title'
  | 'featuredImage___node___uri'
  | 'featuredImage___node___nodeType'
  | 'featuredImage___node___remoteFile___sourceInstanceName'
  | 'featuredImage___node___remoteFile___absolutePath'
  | 'featuredImage___node___remoteFile___relativePath'
  | 'featuredImage___node___remoteFile___extension'
  | 'featuredImage___node___remoteFile___size'
  | 'featuredImage___node___remoteFile___prettySize'
  | 'featuredImage___node___remoteFile___modifiedTime'
  | 'featuredImage___node___remoteFile___accessTime'
  | 'featuredImage___node___remoteFile___changeTime'
  | 'featuredImage___node___remoteFile___birthTime'
  | 'featuredImage___node___remoteFile___root'
  | 'featuredImage___node___remoteFile___dir'
  | 'featuredImage___node___remoteFile___base'
  | 'featuredImage___node___remoteFile___ext'
  | 'featuredImage___node___remoteFile___name'
  | 'featuredImage___node___remoteFile___relativeDirectory'
  | 'featuredImage___node___remoteFile___dev'
  | 'featuredImage___node___remoteFile___mode'
  | 'featuredImage___node___remoteFile___nlink'
  | 'featuredImage___node___remoteFile___uid'
  | 'featuredImage___node___remoteFile___gid'
  | 'featuredImage___node___remoteFile___rdev'
  | 'featuredImage___node___remoteFile___ino'
  | 'featuredImage___node___remoteFile___atimeMs'
  | 'featuredImage___node___remoteFile___mtimeMs'
  | 'featuredImage___node___remoteFile___ctimeMs'
  | 'featuredImage___node___remoteFile___atime'
  | 'featuredImage___node___remoteFile___mtime'
  | 'featuredImage___node___remoteFile___ctime'
  | 'featuredImage___node___remoteFile___birthtime'
  | 'featuredImage___node___remoteFile___birthtimeMs'
  | 'featuredImage___node___remoteFile___blksize'
  | 'featuredImage___node___remoteFile___blocks'
  | 'featuredImage___node___remoteFile___url'
  | 'featuredImage___node___remoteFile___publicURL'
  | 'featuredImage___node___remoteFile___childrenImageSharp'
  | 'featuredImage___node___remoteFile___id'
  | 'featuredImage___node___remoteFile___children'
  | 'featuredImage___node___localFile___sourceInstanceName'
  | 'featuredImage___node___localFile___absolutePath'
  | 'featuredImage___node___localFile___relativePath'
  | 'featuredImage___node___localFile___extension'
  | 'featuredImage___node___localFile___size'
  | 'featuredImage___node___localFile___prettySize'
  | 'featuredImage___node___localFile___modifiedTime'
  | 'featuredImage___node___localFile___accessTime'
  | 'featuredImage___node___localFile___changeTime'
  | 'featuredImage___node___localFile___birthTime'
  | 'featuredImage___node___localFile___root'
  | 'featuredImage___node___localFile___dir'
  | 'featuredImage___node___localFile___base'
  | 'featuredImage___node___localFile___ext'
  | 'featuredImage___node___localFile___name'
  | 'featuredImage___node___localFile___relativeDirectory'
  | 'featuredImage___node___localFile___dev'
  | 'featuredImage___node___localFile___mode'
  | 'featuredImage___node___localFile___nlink'
  | 'featuredImage___node___localFile___uid'
  | 'featuredImage___node___localFile___gid'
  | 'featuredImage___node___localFile___rdev'
  | 'featuredImage___node___localFile___ino'
  | 'featuredImage___node___localFile___atimeMs'
  | 'featuredImage___node___localFile___mtimeMs'
  | 'featuredImage___node___localFile___ctimeMs'
  | 'featuredImage___node___localFile___atime'
  | 'featuredImage___node___localFile___mtime'
  | 'featuredImage___node___localFile___ctime'
  | 'featuredImage___node___localFile___birthtime'
  | 'featuredImage___node___localFile___birthtimeMs'
  | 'featuredImage___node___localFile___blksize'
  | 'featuredImage___node___localFile___blocks'
  | 'featuredImage___node___localFile___url'
  | 'featuredImage___node___localFile___publicURL'
  | 'featuredImage___node___localFile___childrenImageSharp'
  | 'featuredImage___node___localFile___id'
  | 'featuredImage___node___localFile___children'
  | 'featuredImage___node___parent___id'
  | 'featuredImage___node___parent___children'
  | 'featuredImage___node___children'
  | 'featuredImage___node___children___id'
  | 'featuredImage___node___children___children'
  | 'featuredImage___node___internal___content'
  | 'featuredImage___node___internal___contentDigest'
  | 'featuredImage___node___internal___description'
  | 'featuredImage___node___internal___fieldOwners'
  | 'featuredImage___node___internal___ignoreType'
  | 'featuredImage___node___internal___mediaType'
  | 'featuredImage___node___internal___owner'
  | 'featuredImage___node___internal___type'
  | 'featuredImage___node___filename'
  | 'featuredImage___node___filesize'
  | 'featuredImage___node___width'
  | 'featuredImage___node___height'
  | 'featuredImage___node___publicUrl'
  | 'featuredImage___node___resize___width'
  | 'featuredImage___node___resize___height'
  | 'featuredImage___node___resize___src'
  | 'featuredImage___node___gatsbyImage'
  | 'featuredImageDatabaseId'
  | 'featuredImageId'
  | 'guid'
  | 'id'
  | 'isContentNode'
  | 'isRevision'
  | 'isSticky'
  | 'isTermNode'
  | 'language___code'
  | 'language___homeUrl'
  | 'language___id'
  | 'language___locale'
  | 'language___name'
  | 'language___slug'
  | 'lastEditedBy___node___avatar___default'
  | 'lastEditedBy___node___avatar___extraAttr'
  | 'lastEditedBy___node___avatar___forceDefault'
  | 'lastEditedBy___node___avatar___foundAvatar'
  | 'lastEditedBy___node___avatar___height'
  | 'lastEditedBy___node___avatar___rating'
  | 'lastEditedBy___node___avatar___scheme'
  | 'lastEditedBy___node___avatar___size'
  | 'lastEditedBy___node___avatar___url'
  | 'lastEditedBy___node___avatar___width'
  | 'lastEditedBy___node___capKey'
  | 'lastEditedBy___node___capabilities'
  | 'lastEditedBy___node___comments___nodes'
  | 'lastEditedBy___node___databaseId'
  | 'lastEditedBy___node___description'
  | 'lastEditedBy___node___email'
  | 'lastEditedBy___node___extraCapabilities'
  | 'lastEditedBy___node___firstName'
  | 'lastEditedBy___node___id'
  | 'lastEditedBy___node___isContentNode'
  | 'lastEditedBy___node___isTermNode'
  | 'lastEditedBy___node___lastName'
  | 'lastEditedBy___node___locale'
  | 'lastEditedBy___node___name'
  | 'lastEditedBy___node___nicename'
  | 'lastEditedBy___node___nickname'
  | 'lastEditedBy___node___pages___nodes'
  | 'lastEditedBy___node___posts___nodes'
  | 'lastEditedBy___node___registeredDate'
  | 'lastEditedBy___node___roles___nodes'
  | 'lastEditedBy___node___slug'
  | 'lastEditedBy___node___uri'
  | 'lastEditedBy___node___url'
  | 'lastEditedBy___node___username'
  | 'lastEditedBy___node___nodeType'
  | 'lastEditedBy___node___parent___id'
  | 'lastEditedBy___node___parent___children'
  | 'lastEditedBy___node___children'
  | 'lastEditedBy___node___children___id'
  | 'lastEditedBy___node___children___children'
  | 'lastEditedBy___node___internal___content'
  | 'lastEditedBy___node___internal___contentDigest'
  | 'lastEditedBy___node___internal___description'
  | 'lastEditedBy___node___internal___fieldOwners'
  | 'lastEditedBy___node___internal___ignoreType'
  | 'lastEditedBy___node___internal___mediaType'
  | 'lastEditedBy___node___internal___owner'
  | 'lastEditedBy___node___internal___type'
  | 'link'
  | 'modified'
  | 'modifiedGmt'
  | 'pingStatus'
  | 'pinged'
  | 'postFormats___nodes'
  | 'postFormats___nodes___contentNodes___nodes'
  | 'postFormats___nodes___count'
  | 'postFormats___nodes___databaseId'
  | 'postFormats___nodes___description'
  | 'postFormats___nodes___id'
  | 'postFormats___nodes___isContentNode'
  | 'postFormats___nodes___isTermNode'
  | 'postFormats___nodes___link'
  | 'postFormats___nodes___name'
  | 'postFormats___nodes___posts___nodes'
  | 'postFormats___nodes___slug'
  | 'postFormats___nodes___taxonomyName'
  | 'postFormats___nodes___termGroupId'
  | 'postFormats___nodes___termTaxonomyId'
  | 'postFormats___nodes___uri'
  | 'postFormats___nodes___nodeType'
  | 'postFormats___nodes___parent___id'
  | 'postFormats___nodes___parent___children'
  | 'postFormats___nodes___children'
  | 'postFormats___nodes___children___id'
  | 'postFormats___nodes___children___children'
  | 'postFormats___nodes___internal___content'
  | 'postFormats___nodes___internal___contentDigest'
  | 'postFormats___nodes___internal___description'
  | 'postFormats___nodes___internal___fieldOwners'
  | 'postFormats___nodes___internal___ignoreType'
  | 'postFormats___nodes___internal___mediaType'
  | 'postFormats___nodes___internal___owner'
  | 'postFormats___nodes___internal___type'
  | 'realization___dateRealization'
  | 'realization___describedTitle'
  | 'realization___fieldGroupName'
  | 'realization___image___altText'
  | 'realization___image___ancestors___nodes'
  | 'realization___image___authorDatabaseId'
  | 'realization___image___authorId'
  | 'realization___image___caption'
  | 'realization___image___wpChildren___nodes'
  | 'realization___image___commentCount'
  | 'realization___image___commentStatus'
  | 'realization___image___comments___nodes'
  | 'realization___image___contentTypeName'
  | 'realization___image___databaseId'
  | 'realization___image___date'
  | 'realization___image___dateGmt'
  | 'realization___image___description'
  | 'realization___image___desiredSlug'
  | 'realization___image___enclosure'
  | 'realization___image___fileSize'
  | 'realization___image___guid'
  | 'realization___image___id'
  | 'realization___image___isContentNode'
  | 'realization___image___isTermNode'
  | 'realization___image___link'
  | 'realization___image___mediaDetails___file'
  | 'realization___image___mediaDetails___height'
  | 'realization___image___mediaDetails___sizes'
  | 'realization___image___mediaDetails___width'
  | 'realization___image___mediaItemUrl'
  | 'realization___image___mediaType'
  | 'realization___image___mimeType'
  | 'realization___image___modified'
  | 'realization___image___modifiedGmt'
  | 'realization___image___parentDatabaseId'
  | 'realization___image___parentId'
  | 'realization___image___sizes'
  | 'realization___image___slug'
  | 'realization___image___sourceUrl'
  | 'realization___image___srcSet'
  | 'realization___image___status'
  | 'realization___image___template___templateName'
  | 'realization___image___title'
  | 'realization___image___uri'
  | 'realization___image___nodeType'
  | 'realization___image___remoteFile___sourceInstanceName'
  | 'realization___image___remoteFile___absolutePath'
  | 'realization___image___remoteFile___relativePath'
  | 'realization___image___remoteFile___extension'
  | 'realization___image___remoteFile___size'
  | 'realization___image___remoteFile___prettySize'
  | 'realization___image___remoteFile___modifiedTime'
  | 'realization___image___remoteFile___accessTime'
  | 'realization___image___remoteFile___changeTime'
  | 'realization___image___remoteFile___birthTime'
  | 'realization___image___remoteFile___root'
  | 'realization___image___remoteFile___dir'
  | 'realization___image___remoteFile___base'
  | 'realization___image___remoteFile___ext'
  | 'realization___image___remoteFile___name'
  | 'realization___image___remoteFile___relativeDirectory'
  | 'realization___image___remoteFile___dev'
  | 'realization___image___remoteFile___mode'
  | 'realization___image___remoteFile___nlink'
  | 'realization___image___remoteFile___uid'
  | 'realization___image___remoteFile___gid'
  | 'realization___image___remoteFile___rdev'
  | 'realization___image___remoteFile___ino'
  | 'realization___image___remoteFile___atimeMs'
  | 'realization___image___remoteFile___mtimeMs'
  | 'realization___image___remoteFile___ctimeMs'
  | 'realization___image___remoteFile___atime'
  | 'realization___image___remoteFile___mtime'
  | 'realization___image___remoteFile___ctime'
  | 'realization___image___remoteFile___birthtime'
  | 'realization___image___remoteFile___birthtimeMs'
  | 'realization___image___remoteFile___blksize'
  | 'realization___image___remoteFile___blocks'
  | 'realization___image___remoteFile___url'
  | 'realization___image___remoteFile___publicURL'
  | 'realization___image___remoteFile___childrenImageSharp'
  | 'realization___image___remoteFile___id'
  | 'realization___image___remoteFile___children'
  | 'realization___image___localFile___sourceInstanceName'
  | 'realization___image___localFile___absolutePath'
  | 'realization___image___localFile___relativePath'
  | 'realization___image___localFile___extension'
  | 'realization___image___localFile___size'
  | 'realization___image___localFile___prettySize'
  | 'realization___image___localFile___modifiedTime'
  | 'realization___image___localFile___accessTime'
  | 'realization___image___localFile___changeTime'
  | 'realization___image___localFile___birthTime'
  | 'realization___image___localFile___root'
  | 'realization___image___localFile___dir'
  | 'realization___image___localFile___base'
  | 'realization___image___localFile___ext'
  | 'realization___image___localFile___name'
  | 'realization___image___localFile___relativeDirectory'
  | 'realization___image___localFile___dev'
  | 'realization___image___localFile___mode'
  | 'realization___image___localFile___nlink'
  | 'realization___image___localFile___uid'
  | 'realization___image___localFile___gid'
  | 'realization___image___localFile___rdev'
  | 'realization___image___localFile___ino'
  | 'realization___image___localFile___atimeMs'
  | 'realization___image___localFile___mtimeMs'
  | 'realization___image___localFile___ctimeMs'
  | 'realization___image___localFile___atime'
  | 'realization___image___localFile___mtime'
  | 'realization___image___localFile___ctime'
  | 'realization___image___localFile___birthtime'
  | 'realization___image___localFile___birthtimeMs'
  | 'realization___image___localFile___blksize'
  | 'realization___image___localFile___blocks'
  | 'realization___image___localFile___url'
  | 'realization___image___localFile___publicURL'
  | 'realization___image___localFile___childrenImageSharp'
  | 'realization___image___localFile___id'
  | 'realization___image___localFile___children'
  | 'realization___image___parent___id'
  | 'realization___image___parent___children'
  | 'realization___image___children'
  | 'realization___image___children___id'
  | 'realization___image___children___children'
  | 'realization___image___internal___content'
  | 'realization___image___internal___contentDigest'
  | 'realization___image___internal___description'
  | 'realization___image___internal___fieldOwners'
  | 'realization___image___internal___ignoreType'
  | 'realization___image___internal___mediaType'
  | 'realization___image___internal___owner'
  | 'realization___image___internal___type'
  | 'realization___image___filename'
  | 'realization___image___filesize'
  | 'realization___image___width'
  | 'realization___image___height'
  | 'realization___image___publicUrl'
  | 'realization___image___resize___width'
  | 'realization___image___resize___height'
  | 'realization___image___resize___src'
  | 'realization___image___gatsbyImage'
  | 'realization___location'
  | 'realization___text'
  | 'realization___title'
  | 'slug'
  | 'status'
  | 'tags___nodes'
  | 'tags___nodes___contentNodes___nodes'
  | 'tags___nodes___count'
  | 'tags___nodes___databaseId'
  | 'tags___nodes___description'
  | 'tags___nodes___id'
  | 'tags___nodes___isContentNode'
  | 'tags___nodes___isTermNode'
  | 'tags___nodes___language___code'
  | 'tags___nodes___language___homeUrl'
  | 'tags___nodes___language___id'
  | 'tags___nodes___language___locale'
  | 'tags___nodes___language___name'
  | 'tags___nodes___language___slug'
  | 'tags___nodes___link'
  | 'tags___nodes___name'
  | 'tags___nodes___posts___nodes'
  | 'tags___nodes___slug'
  | 'tags___nodes___taxonomyName'
  | 'tags___nodes___termGroupId'
  | 'tags___nodes___termTaxonomyId'
  | 'tags___nodes___translations'
  | 'tags___nodes___translations___count'
  | 'tags___nodes___translations___databaseId'
  | 'tags___nodes___translations___description'
  | 'tags___nodes___translations___id'
  | 'tags___nodes___translations___isContentNode'
  | 'tags___nodes___translations___isTermNode'
  | 'tags___nodes___translations___link'
  | 'tags___nodes___translations___name'
  | 'tags___nodes___translations___slug'
  | 'tags___nodes___translations___taxonomyName'
  | 'tags___nodes___translations___termGroupId'
  | 'tags___nodes___translations___termTaxonomyId'
  | 'tags___nodes___translations___translations'
  | 'tags___nodes___translations___uri'
  | 'tags___nodes___translations___nodeType'
  | 'tags___nodes___translations___children'
  | 'tags___nodes___uri'
  | 'tags___nodes___nodeType'
  | 'tags___nodes___parent___id'
  | 'tags___nodes___parent___children'
  | 'tags___nodes___children'
  | 'tags___nodes___children___id'
  | 'tags___nodes___children___children'
  | 'tags___nodes___internal___content'
  | 'tags___nodes___internal___contentDigest'
  | 'tags___nodes___internal___description'
  | 'tags___nodes___internal___fieldOwners'
  | 'tags___nodes___internal___ignoreType'
  | 'tags___nodes___internal___mediaType'
  | 'tags___nodes___internal___owner'
  | 'tags___nodes___internal___type'
  | 'template___templateName'
  | 'terms___nodes'
  | 'terms___nodes___count'
  | 'terms___nodes___databaseId'
  | 'terms___nodes___description'
  | 'terms___nodes___id'
  | 'terms___nodes___isContentNode'
  | 'terms___nodes___isTermNode'
  | 'terms___nodes___link'
  | 'terms___nodes___name'
  | 'terms___nodes___slug'
  | 'terms___nodes___taxonomyName'
  | 'terms___nodes___termGroupId'
  | 'terms___nodes___termTaxonomyId'
  | 'terms___nodes___uri'
  | 'terms___nodes___nodeType'
  | 'terms___nodes___parent___id'
  | 'terms___nodes___parent___children'
  | 'terms___nodes___children'
  | 'terms___nodes___children___id'
  | 'terms___nodes___children___children'
  | 'terms___nodes___internal___content'
  | 'terms___nodes___internal___contentDigest'
  | 'terms___nodes___internal___description'
  | 'terms___nodes___internal___fieldOwners'
  | 'terms___nodes___internal___ignoreType'
  | 'terms___nodes___internal___mediaType'
  | 'terms___nodes___internal___owner'
  | 'terms___nodes___internal___type'
  | 'title'
  | 'toPing'
  | 'translations'
  | 'translations___author___node___capKey'
  | 'translations___author___node___capabilities'
  | 'translations___author___node___databaseId'
  | 'translations___author___node___description'
  | 'translations___author___node___email'
  | 'translations___author___node___extraCapabilities'
  | 'translations___author___node___firstName'
  | 'translations___author___node___id'
  | 'translations___author___node___isContentNode'
  | 'translations___author___node___isTermNode'
  | 'translations___author___node___lastName'
  | 'translations___author___node___locale'
  | 'translations___author___node___name'
  | 'translations___author___node___nicename'
  | 'translations___author___node___nickname'
  | 'translations___author___node___registeredDate'
  | 'translations___author___node___slug'
  | 'translations___author___node___uri'
  | 'translations___author___node___url'
  | 'translations___author___node___username'
  | 'translations___author___node___nodeType'
  | 'translations___author___node___children'
  | 'translations___authorDatabaseId'
  | 'translations___authorId'
  | 'translations___categories___nodes'
  | 'translations___categories___nodes___count'
  | 'translations___categories___nodes___databaseId'
  | 'translations___categories___nodes___description'
  | 'translations___categories___nodes___id'
  | 'translations___categories___nodes___isContentNode'
  | 'translations___categories___nodes___isTermNode'
  | 'translations___categories___nodes___link'
  | 'translations___categories___nodes___name'
  | 'translations___categories___nodes___parentDatabaseId'
  | 'translations___categories___nodes___parentId'
  | 'translations___categories___nodes___slug'
  | 'translations___categories___nodes___taxonomyName'
  | 'translations___categories___nodes___termGroupId'
  | 'translations___categories___nodes___termTaxonomyId'
  | 'translations___categories___nodes___translations'
  | 'translations___categories___nodes___uri'
  | 'translations___categories___nodes___nodeType'
  | 'translations___categories___nodes___children'
  | 'translations___commentCount'
  | 'translations___commentStatus'
  | 'translations___comments___nodes'
  | 'translations___comments___nodes___agent'
  | 'translations___comments___nodes___approved'
  | 'translations___comments___nodes___authorIp'
  | 'translations___comments___nodes___content'
  | 'translations___comments___nodes___databaseId'
  | 'translations___comments___nodes___date'
  | 'translations___comments___nodes___dateGmt'
  | 'translations___comments___nodes___id'
  | 'translations___comments___nodes___karma'
  | 'translations___comments___nodes___parentDatabaseId'
  | 'translations___comments___nodes___parentId'
  | 'translations___comments___nodes___type'
  | 'translations___comments___nodes___nodeType'
  | 'translations___comments___nodes___children'
  | 'translations___content'
  | 'translations___contentType___node___archivePath'
  | 'translations___contentType___node___canExport'
  | 'translations___contentType___node___deleteWithUser'
  | 'translations___contentType___node___description'
  | 'translations___contentType___node___excludeFromSearch'
  | 'translations___contentType___node___graphqlPluralName'
  | 'translations___contentType___node___graphqlSingleName'
  | 'translations___contentType___node___hasArchive'
  | 'translations___contentType___node___hierarchical'
  | 'translations___contentType___node___id'
  | 'translations___contentType___node___isContentNode'
  | 'translations___contentType___node___isFrontPage'
  | 'translations___contentType___node___isPostsPage'
  | 'translations___contentType___node___isTermNode'
  | 'translations___contentType___node___label'
  | 'translations___contentType___node___menuIcon'
  | 'translations___contentType___node___menuPosition'
  | 'translations___contentType___node___name'
  | 'translations___contentType___node___public'
  | 'translations___contentType___node___publiclyQueryable'
  | 'translations___contentType___node___restBase'
  | 'translations___contentType___node___restControllerClass'
  | 'translations___contentType___node___showInAdminBar'
  | 'translations___contentType___node___showInGraphql'
  | 'translations___contentType___node___showInMenu'
  | 'translations___contentType___node___showInNavMenus'
  | 'translations___contentType___node___showInRest'
  | 'translations___contentType___node___showUi'
  | 'translations___contentType___node___uri'
  | 'translations___contentType___node___nodeType'
  | 'translations___contentType___node___children'
  | 'translations___contentTypeName'
  | 'translations___databaseId'
  | 'translations___date'
  | 'translations___dateGmt'
  | 'translations___desiredSlug'
  | 'translations___enclosure'
  | 'translations___excerpt'
  | 'translations___featuredImage___node___altText'
  | 'translations___featuredImage___node___authorDatabaseId'
  | 'translations___featuredImage___node___authorId'
  | 'translations___featuredImage___node___caption'
  | 'translations___featuredImage___node___commentCount'
  | 'translations___featuredImage___node___commentStatus'
  | 'translations___featuredImage___node___contentTypeName'
  | 'translations___featuredImage___node___databaseId'
  | 'translations___featuredImage___node___date'
  | 'translations___featuredImage___node___dateGmt'
  | 'translations___featuredImage___node___description'
  | 'translations___featuredImage___node___desiredSlug'
  | 'translations___featuredImage___node___enclosure'
  | 'translations___featuredImage___node___fileSize'
  | 'translations___featuredImage___node___guid'
  | 'translations___featuredImage___node___id'
  | 'translations___featuredImage___node___isContentNode'
  | 'translations___featuredImage___node___isTermNode'
  | 'translations___featuredImage___node___link'
  | 'translations___featuredImage___node___mediaItemUrl'
  | 'translations___featuredImage___node___mediaType'
  | 'translations___featuredImage___node___mimeType'
  | 'translations___featuredImage___node___modified'
  | 'translations___featuredImage___node___modifiedGmt'
  | 'translations___featuredImage___node___parentDatabaseId'
  | 'translations___featuredImage___node___parentId'
  | 'translations___featuredImage___node___sizes'
  | 'translations___featuredImage___node___slug'
  | 'translations___featuredImage___node___sourceUrl'
  | 'translations___featuredImage___node___srcSet'
  | 'translations___featuredImage___node___status'
  | 'translations___featuredImage___node___title'
  | 'translations___featuredImage___node___uri'
  | 'translations___featuredImage___node___nodeType'
  | 'translations___featuredImage___node___children'
  | 'translations___featuredImage___node___filename'
  | 'translations___featuredImage___node___filesize'
  | 'translations___featuredImage___node___width'
  | 'translations___featuredImage___node___height'
  | 'translations___featuredImage___node___publicUrl'
  | 'translations___featuredImage___node___gatsbyImage'
  | 'translations___featuredImageDatabaseId'
  | 'translations___featuredImageId'
  | 'translations___guid'
  | 'translations___id'
  | 'translations___isContentNode'
  | 'translations___isRevision'
  | 'translations___isSticky'
  | 'translations___isTermNode'
  | 'translations___language___code'
  | 'translations___language___homeUrl'
  | 'translations___language___id'
  | 'translations___language___locale'
  | 'translations___language___name'
  | 'translations___language___slug'
  | 'translations___lastEditedBy___node___capKey'
  | 'translations___lastEditedBy___node___capabilities'
  | 'translations___lastEditedBy___node___databaseId'
  | 'translations___lastEditedBy___node___description'
  | 'translations___lastEditedBy___node___email'
  | 'translations___lastEditedBy___node___extraCapabilities'
  | 'translations___lastEditedBy___node___firstName'
  | 'translations___lastEditedBy___node___id'
  | 'translations___lastEditedBy___node___isContentNode'
  | 'translations___lastEditedBy___node___isTermNode'
  | 'translations___lastEditedBy___node___lastName'
  | 'translations___lastEditedBy___node___locale'
  | 'translations___lastEditedBy___node___name'
  | 'translations___lastEditedBy___node___nicename'
  | 'translations___lastEditedBy___node___nickname'
  | 'translations___lastEditedBy___node___registeredDate'
  | 'translations___lastEditedBy___node___slug'
  | 'translations___lastEditedBy___node___uri'
  | 'translations___lastEditedBy___node___url'
  | 'translations___lastEditedBy___node___username'
  | 'translations___lastEditedBy___node___nodeType'
  | 'translations___lastEditedBy___node___children'
  | 'translations___link'
  | 'translations___modified'
  | 'translations___modifiedGmt'
  | 'translations___pingStatus'
  | 'translations___pinged'
  | 'translations___postFormats___nodes'
  | 'translations___postFormats___nodes___count'
  | 'translations___postFormats___nodes___databaseId'
  | 'translations___postFormats___nodes___description'
  | 'translations___postFormats___nodes___id'
  | 'translations___postFormats___nodes___isContentNode'
  | 'translations___postFormats___nodes___isTermNode'
  | 'translations___postFormats___nodes___link'
  | 'translations___postFormats___nodes___name'
  | 'translations___postFormats___nodes___slug'
  | 'translations___postFormats___nodes___taxonomyName'
  | 'translations___postFormats___nodes___termGroupId'
  | 'translations___postFormats___nodes___termTaxonomyId'
  | 'translations___postFormats___nodes___uri'
  | 'translations___postFormats___nodes___nodeType'
  | 'translations___postFormats___nodes___children'
  | 'translations___realization___dateRealization'
  | 'translations___realization___describedTitle'
  | 'translations___realization___fieldGroupName'
  | 'translations___realization___image___altText'
  | 'translations___realization___image___authorDatabaseId'
  | 'translations___realization___image___authorId'
  | 'translations___realization___image___caption'
  | 'translations___realization___image___commentCount'
  | 'translations___realization___image___commentStatus'
  | 'translations___realization___image___contentTypeName'
  | 'translations___realization___image___databaseId'
  | 'translations___realization___image___date'
  | 'translations___realization___image___dateGmt'
  | 'translations___realization___image___description'
  | 'translations___realization___image___desiredSlug'
  | 'translations___realization___image___enclosure'
  | 'translations___realization___image___fileSize'
  | 'translations___realization___image___guid'
  | 'translations___realization___image___id'
  | 'translations___realization___image___isContentNode'
  | 'translations___realization___image___isTermNode'
  | 'translations___realization___image___link'
  | 'translations___realization___image___mediaItemUrl'
  | 'translations___realization___image___mediaType'
  | 'translations___realization___image___mimeType'
  | 'translations___realization___image___modified'
  | 'translations___realization___image___modifiedGmt'
  | 'translations___realization___image___parentDatabaseId'
  | 'translations___realization___image___parentId'
  | 'translations___realization___image___sizes'
  | 'translations___realization___image___slug'
  | 'translations___realization___image___sourceUrl'
  | 'translations___realization___image___srcSet'
  | 'translations___realization___image___status'
  | 'translations___realization___image___title'
  | 'translations___realization___image___uri'
  | 'translations___realization___image___nodeType'
  | 'translations___realization___image___children'
  | 'translations___realization___image___filename'
  | 'translations___realization___image___filesize'
  | 'translations___realization___image___width'
  | 'translations___realization___image___height'
  | 'translations___realization___image___publicUrl'
  | 'translations___realization___image___gatsbyImage'
  | 'translations___realization___location'
  | 'translations___realization___text'
  | 'translations___realization___title'
  | 'translations___slug'
  | 'translations___status'
  | 'translations___tags___nodes'
  | 'translations___tags___nodes___count'
  | 'translations___tags___nodes___databaseId'
  | 'translations___tags___nodes___description'
  | 'translations___tags___nodes___id'
  | 'translations___tags___nodes___isContentNode'
  | 'translations___tags___nodes___isTermNode'
  | 'translations___tags___nodes___link'
  | 'translations___tags___nodes___name'
  | 'translations___tags___nodes___slug'
  | 'translations___tags___nodes___taxonomyName'
  | 'translations___tags___nodes___termGroupId'
  | 'translations___tags___nodes___termTaxonomyId'
  | 'translations___tags___nodes___translations'
  | 'translations___tags___nodes___uri'
  | 'translations___tags___nodes___nodeType'
  | 'translations___tags___nodes___children'
  | 'translations___template___templateName'
  | 'translations___terms___nodes'
  | 'translations___terms___nodes___count'
  | 'translations___terms___nodes___databaseId'
  | 'translations___terms___nodes___description'
  | 'translations___terms___nodes___id'
  | 'translations___terms___nodes___isContentNode'
  | 'translations___terms___nodes___isTermNode'
  | 'translations___terms___nodes___link'
  | 'translations___terms___nodes___name'
  | 'translations___terms___nodes___slug'
  | 'translations___terms___nodes___taxonomyName'
  | 'translations___terms___nodes___termGroupId'
  | 'translations___terms___nodes___termTaxonomyId'
  | 'translations___terms___nodes___uri'
  | 'translations___terms___nodes___nodeType'
  | 'translations___terms___nodes___children'
  | 'translations___title'
  | 'translations___toPing'
  | 'translations___translations'
  | 'translations___translations___authorDatabaseId'
  | 'translations___translations___authorId'
  | 'translations___translations___categories___nodes'
  | 'translations___translations___commentCount'
  | 'translations___translations___commentStatus'
  | 'translations___translations___comments___nodes'
  | 'translations___translations___content'
  | 'translations___translations___contentTypeName'
  | 'translations___translations___databaseId'
  | 'translations___translations___date'
  | 'translations___translations___dateGmt'
  | 'translations___translations___desiredSlug'
  | 'translations___translations___enclosure'
  | 'translations___translations___excerpt'
  | 'translations___translations___featuredImageDatabaseId'
  | 'translations___translations___featuredImageId'
  | 'translations___translations___guid'
  | 'translations___translations___id'
  | 'translations___translations___isContentNode'
  | 'translations___translations___isRevision'
  | 'translations___translations___isSticky'
  | 'translations___translations___isTermNode'
  | 'translations___translations___language___code'
  | 'translations___translations___language___homeUrl'
  | 'translations___translations___language___id'
  | 'translations___translations___language___locale'
  | 'translations___translations___language___name'
  | 'translations___translations___language___slug'
  | 'translations___translations___link'
  | 'translations___translations___modified'
  | 'translations___translations___modifiedGmt'
  | 'translations___translations___pingStatus'
  | 'translations___translations___pinged'
  | 'translations___translations___postFormats___nodes'
  | 'translations___translations___realization___dateRealization'
  | 'translations___translations___realization___describedTitle'
  | 'translations___translations___realization___fieldGroupName'
  | 'translations___translations___realization___location'
  | 'translations___translations___realization___text'
  | 'translations___translations___realization___title'
  | 'translations___translations___slug'
  | 'translations___translations___status'
  | 'translations___translations___tags___nodes'
  | 'translations___translations___template___templateName'
  | 'translations___translations___terms___nodes'
  | 'translations___translations___title'
  | 'translations___translations___toPing'
  | 'translations___translations___translations'
  | 'translations___translations___translations___authorDatabaseId'
  | 'translations___translations___translations___authorId'
  | 'translations___translations___translations___commentCount'
  | 'translations___translations___translations___commentStatus'
  | 'translations___translations___translations___content'
  | 'translations___translations___translations___contentTypeName'
  | 'translations___translations___translations___databaseId'
  | 'translations___translations___translations___date'
  | 'translations___translations___translations___dateGmt'
  | 'translations___translations___translations___desiredSlug'
  | 'translations___translations___translations___enclosure'
  | 'translations___translations___translations___excerpt'
  | 'translations___translations___translations___featuredImageDatabaseId'
  | 'translations___translations___translations___featuredImageId'
  | 'translations___translations___translations___guid'
  | 'translations___translations___translations___id'
  | 'translations___translations___translations___isContentNode'
  | 'translations___translations___translations___isRevision'
  | 'translations___translations___translations___isSticky'
  | 'translations___translations___translations___isTermNode'
  | 'translations___translations___translations___link'
  | 'translations___translations___translations___modified'
  | 'translations___translations___translations___modifiedGmt'
  | 'translations___translations___translations___pingStatus'
  | 'translations___translations___translations___pinged'
  | 'translations___translations___translations___slug'
  | 'translations___translations___translations___status'
  | 'translations___translations___translations___title'
  | 'translations___translations___translations___toPing'
  | 'translations___translations___translations___translations'
  | 'translations___translations___translations___uri'
  | 'translations___translations___translations___nodeType'
  | 'translations___translations___translations___children'
  | 'translations___translations___uri'
  | 'translations___translations___nodeType'
  | 'translations___translations___parent___id'
  | 'translations___translations___parent___children'
  | 'translations___translations___children'
  | 'translations___translations___children___id'
  | 'translations___translations___children___children'
  | 'translations___translations___internal___content'
  | 'translations___translations___internal___contentDigest'
  | 'translations___translations___internal___description'
  | 'translations___translations___internal___fieldOwners'
  | 'translations___translations___internal___ignoreType'
  | 'translations___translations___internal___mediaType'
  | 'translations___translations___internal___owner'
  | 'translations___translations___internal___type'
  | 'translations___uri'
  | 'translations___nodeType'
  | 'translations___parent___id'
  | 'translations___parent___parent___id'
  | 'translations___parent___parent___children'
  | 'translations___parent___children'
  | 'translations___parent___children___id'
  | 'translations___parent___children___children'
  | 'translations___parent___internal___content'
  | 'translations___parent___internal___contentDigest'
  | 'translations___parent___internal___description'
  | 'translations___parent___internal___fieldOwners'
  | 'translations___parent___internal___ignoreType'
  | 'translations___parent___internal___mediaType'
  | 'translations___parent___internal___owner'
  | 'translations___parent___internal___type'
  | 'translations___children'
  | 'translations___children___id'
  | 'translations___children___parent___id'
  | 'translations___children___parent___children'
  | 'translations___children___children'
  | 'translations___children___children___id'
  | 'translations___children___children___children'
  | 'translations___children___internal___content'
  | 'translations___children___internal___contentDigest'
  | 'translations___children___internal___description'
  | 'translations___children___internal___fieldOwners'
  | 'translations___children___internal___ignoreType'
  | 'translations___children___internal___mediaType'
  | 'translations___children___internal___owner'
  | 'translations___children___internal___type'
  | 'translations___internal___content'
  | 'translations___internal___contentDigest'
  | 'translations___internal___description'
  | 'translations___internal___fieldOwners'
  | 'translations___internal___ignoreType'
  | 'translations___internal___mediaType'
  | 'translations___internal___owner'
  | 'translations___internal___type'
  | 'uri'
  | 'nodeType'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type WpPostGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpPostEdge>;
  nodes: Array<WpPost>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<WpPostGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type WpPostGroupConnectionDistinctArgs = {
  field: WpPostFieldsEnum;
};


export type WpPostGroupConnectionMaxArgs = {
  field: WpPostFieldsEnum;
};


export type WpPostGroupConnectionMinArgs = {
  field: WpPostFieldsEnum;
};


export type WpPostGroupConnectionSumArgs = {
  field: WpPostFieldsEnum;
};


export type WpPostGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: WpPostFieldsEnum;
};

export type WpPostSortInput = {
  fields?: InputMaybe<Array<InputMaybe<WpPostFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type WpCategoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpCategoryEdge>;
  nodes: Array<WpCategory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<WpCategoryGroupConnection>;
};


export type WpCategoryConnectionDistinctArgs = {
  field: WpCategoryFieldsEnum;
};


export type WpCategoryConnectionMaxArgs = {
  field: WpCategoryFieldsEnum;
};


export type WpCategoryConnectionMinArgs = {
  field: WpCategoryFieldsEnum;
};


export type WpCategoryConnectionSumArgs = {
  field: WpCategoryFieldsEnum;
};


export type WpCategoryConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: WpCategoryFieldsEnum;
};

export type WpCategoryEdge = {
  next?: Maybe<WpCategory>;
  node: WpCategory;
  previous?: Maybe<WpCategory>;
};

export type WpCategoryFieldsEnum =
  | 'ancestors___nodes'
  | 'ancestors___nodes___ancestors___nodes'
  | 'ancestors___nodes___wpChildren___nodes'
  | 'ancestors___nodes___contentNodes___nodes'
  | 'ancestors___nodes___count'
  | 'ancestors___nodes___databaseId'
  | 'ancestors___nodes___description'
  | 'ancestors___nodes___id'
  | 'ancestors___nodes___isContentNode'
  | 'ancestors___nodes___isTermNode'
  | 'ancestors___nodes___language___code'
  | 'ancestors___nodes___language___homeUrl'
  | 'ancestors___nodes___language___id'
  | 'ancestors___nodes___language___locale'
  | 'ancestors___nodes___language___name'
  | 'ancestors___nodes___language___slug'
  | 'ancestors___nodes___link'
  | 'ancestors___nodes___name'
  | 'ancestors___nodes___parentDatabaseId'
  | 'ancestors___nodes___parentId'
  | 'ancestors___nodes___posts___nodes'
  | 'ancestors___nodes___slug'
  | 'ancestors___nodes___taxonomyName'
  | 'ancestors___nodes___termGroupId'
  | 'ancestors___nodes___termTaxonomyId'
  | 'ancestors___nodes___translations'
  | 'ancestors___nodes___translations___count'
  | 'ancestors___nodes___translations___databaseId'
  | 'ancestors___nodes___translations___description'
  | 'ancestors___nodes___translations___id'
  | 'ancestors___nodes___translations___isContentNode'
  | 'ancestors___nodes___translations___isTermNode'
  | 'ancestors___nodes___translations___link'
  | 'ancestors___nodes___translations___name'
  | 'ancestors___nodes___translations___parentDatabaseId'
  | 'ancestors___nodes___translations___parentId'
  | 'ancestors___nodes___translations___slug'
  | 'ancestors___nodes___translations___taxonomyName'
  | 'ancestors___nodes___translations___termGroupId'
  | 'ancestors___nodes___translations___termTaxonomyId'
  | 'ancestors___nodes___translations___translations'
  | 'ancestors___nodes___translations___uri'
  | 'ancestors___nodes___translations___nodeType'
  | 'ancestors___nodes___translations___children'
  | 'ancestors___nodes___uri'
  | 'ancestors___nodes___nodeType'
  | 'ancestors___nodes___parent___id'
  | 'ancestors___nodes___parent___children'
  | 'ancestors___nodes___children'
  | 'ancestors___nodes___children___id'
  | 'ancestors___nodes___children___children'
  | 'ancestors___nodes___internal___content'
  | 'ancestors___nodes___internal___contentDigest'
  | 'ancestors___nodes___internal___description'
  | 'ancestors___nodes___internal___fieldOwners'
  | 'ancestors___nodes___internal___ignoreType'
  | 'ancestors___nodes___internal___mediaType'
  | 'ancestors___nodes___internal___owner'
  | 'ancestors___nodes___internal___type'
  | 'wpChildren___nodes'
  | 'wpChildren___nodes___ancestors___nodes'
  | 'wpChildren___nodes___wpChildren___nodes'
  | 'wpChildren___nodes___contentNodes___nodes'
  | 'wpChildren___nodes___count'
  | 'wpChildren___nodes___databaseId'
  | 'wpChildren___nodes___description'
  | 'wpChildren___nodes___id'
  | 'wpChildren___nodes___isContentNode'
  | 'wpChildren___nodes___isTermNode'
  | 'wpChildren___nodes___language___code'
  | 'wpChildren___nodes___language___homeUrl'
  | 'wpChildren___nodes___language___id'
  | 'wpChildren___nodes___language___locale'
  | 'wpChildren___nodes___language___name'
  | 'wpChildren___nodes___language___slug'
  | 'wpChildren___nodes___link'
  | 'wpChildren___nodes___name'
  | 'wpChildren___nodes___parentDatabaseId'
  | 'wpChildren___nodes___parentId'
  | 'wpChildren___nodes___posts___nodes'
  | 'wpChildren___nodes___slug'
  | 'wpChildren___nodes___taxonomyName'
  | 'wpChildren___nodes___termGroupId'
  | 'wpChildren___nodes___termTaxonomyId'
  | 'wpChildren___nodes___translations'
  | 'wpChildren___nodes___translations___count'
  | 'wpChildren___nodes___translations___databaseId'
  | 'wpChildren___nodes___translations___description'
  | 'wpChildren___nodes___translations___id'
  | 'wpChildren___nodes___translations___isContentNode'
  | 'wpChildren___nodes___translations___isTermNode'
  | 'wpChildren___nodes___translations___link'
  | 'wpChildren___nodes___translations___name'
  | 'wpChildren___nodes___translations___parentDatabaseId'
  | 'wpChildren___nodes___translations___parentId'
  | 'wpChildren___nodes___translations___slug'
  | 'wpChildren___nodes___translations___taxonomyName'
  | 'wpChildren___nodes___translations___termGroupId'
  | 'wpChildren___nodes___translations___termTaxonomyId'
  | 'wpChildren___nodes___translations___translations'
  | 'wpChildren___nodes___translations___uri'
  | 'wpChildren___nodes___translations___nodeType'
  | 'wpChildren___nodes___translations___children'
  | 'wpChildren___nodes___uri'
  | 'wpChildren___nodes___nodeType'
  | 'wpChildren___nodes___parent___id'
  | 'wpChildren___nodes___parent___children'
  | 'wpChildren___nodes___children'
  | 'wpChildren___nodes___children___id'
  | 'wpChildren___nodes___children___children'
  | 'wpChildren___nodes___internal___content'
  | 'wpChildren___nodes___internal___contentDigest'
  | 'wpChildren___nodes___internal___description'
  | 'wpChildren___nodes___internal___fieldOwners'
  | 'wpChildren___nodes___internal___ignoreType'
  | 'wpChildren___nodes___internal___mediaType'
  | 'wpChildren___nodes___internal___owner'
  | 'wpChildren___nodes___internal___type'
  | 'contentNodes___nodes'
  | 'contentNodes___nodes___contentTypeName'
  | 'contentNodes___nodes___databaseId'
  | 'contentNodes___nodes___date'
  | 'contentNodes___nodes___dateGmt'
  | 'contentNodes___nodes___desiredSlug'
  | 'contentNodes___nodes___enclosure'
  | 'contentNodes___nodes___guid'
  | 'contentNodes___nodes___id'
  | 'contentNodes___nodes___isContentNode'
  | 'contentNodes___nodes___isTermNode'
  | 'contentNodes___nodes___link'
  | 'contentNodes___nodes___modified'
  | 'contentNodes___nodes___modifiedGmt'
  | 'contentNodes___nodes___slug'
  | 'contentNodes___nodes___status'
  | 'contentNodes___nodes___template___templateName'
  | 'contentNodes___nodes___uri'
  | 'contentNodes___nodes___nodeType'
  | 'contentNodes___nodes___parent___id'
  | 'contentNodes___nodes___parent___children'
  | 'contentNodes___nodes___children'
  | 'contentNodes___nodes___children___id'
  | 'contentNodes___nodes___children___children'
  | 'contentNodes___nodes___internal___content'
  | 'contentNodes___nodes___internal___contentDigest'
  | 'contentNodes___nodes___internal___description'
  | 'contentNodes___nodes___internal___fieldOwners'
  | 'contentNodes___nodes___internal___ignoreType'
  | 'contentNodes___nodes___internal___mediaType'
  | 'contentNodes___nodes___internal___owner'
  | 'contentNodes___nodes___internal___type'
  | 'count'
  | 'databaseId'
  | 'description'
  | 'id'
  | 'isContentNode'
  | 'isTermNode'
  | 'language___code'
  | 'language___homeUrl'
  | 'language___id'
  | 'language___locale'
  | 'language___name'
  | 'language___slug'
  | 'link'
  | 'name'
  | 'wpParent___node___ancestors___nodes'
  | 'wpParent___node___wpChildren___nodes'
  | 'wpParent___node___contentNodes___nodes'
  | 'wpParent___node___count'
  | 'wpParent___node___databaseId'
  | 'wpParent___node___description'
  | 'wpParent___node___id'
  | 'wpParent___node___isContentNode'
  | 'wpParent___node___isTermNode'
  | 'wpParent___node___language___code'
  | 'wpParent___node___language___homeUrl'
  | 'wpParent___node___language___id'
  | 'wpParent___node___language___locale'
  | 'wpParent___node___language___name'
  | 'wpParent___node___language___slug'
  | 'wpParent___node___link'
  | 'wpParent___node___name'
  | 'wpParent___node___parentDatabaseId'
  | 'wpParent___node___parentId'
  | 'wpParent___node___posts___nodes'
  | 'wpParent___node___slug'
  | 'wpParent___node___taxonomyName'
  | 'wpParent___node___termGroupId'
  | 'wpParent___node___termTaxonomyId'
  | 'wpParent___node___translations'
  | 'wpParent___node___translations___count'
  | 'wpParent___node___translations___databaseId'
  | 'wpParent___node___translations___description'
  | 'wpParent___node___translations___id'
  | 'wpParent___node___translations___isContentNode'
  | 'wpParent___node___translations___isTermNode'
  | 'wpParent___node___translations___link'
  | 'wpParent___node___translations___name'
  | 'wpParent___node___translations___parentDatabaseId'
  | 'wpParent___node___translations___parentId'
  | 'wpParent___node___translations___slug'
  | 'wpParent___node___translations___taxonomyName'
  | 'wpParent___node___translations___termGroupId'
  | 'wpParent___node___translations___termTaxonomyId'
  | 'wpParent___node___translations___translations'
  | 'wpParent___node___translations___uri'
  | 'wpParent___node___translations___nodeType'
  | 'wpParent___node___translations___children'
  | 'wpParent___node___uri'
  | 'wpParent___node___nodeType'
  | 'wpParent___node___parent___id'
  | 'wpParent___node___parent___children'
  | 'wpParent___node___children'
  | 'wpParent___node___children___id'
  | 'wpParent___node___children___children'
  | 'wpParent___node___internal___content'
  | 'wpParent___node___internal___contentDigest'
  | 'wpParent___node___internal___description'
  | 'wpParent___node___internal___fieldOwners'
  | 'wpParent___node___internal___ignoreType'
  | 'wpParent___node___internal___mediaType'
  | 'wpParent___node___internal___owner'
  | 'wpParent___node___internal___type'
  | 'parentDatabaseId'
  | 'parentId'
  | 'posts___nodes'
  | 'posts___nodes___authorDatabaseId'
  | 'posts___nodes___authorId'
  | 'posts___nodes___categories___nodes'
  | 'posts___nodes___commentCount'
  | 'posts___nodes___commentStatus'
  | 'posts___nodes___comments___nodes'
  | 'posts___nodes___content'
  | 'posts___nodes___contentTypeName'
  | 'posts___nodes___databaseId'
  | 'posts___nodes___date'
  | 'posts___nodes___dateGmt'
  | 'posts___nodes___desiredSlug'
  | 'posts___nodes___enclosure'
  | 'posts___nodes___excerpt'
  | 'posts___nodes___featuredImageDatabaseId'
  | 'posts___nodes___featuredImageId'
  | 'posts___nodes___guid'
  | 'posts___nodes___id'
  | 'posts___nodes___isContentNode'
  | 'posts___nodes___isRevision'
  | 'posts___nodes___isSticky'
  | 'posts___nodes___isTermNode'
  | 'posts___nodes___language___code'
  | 'posts___nodes___language___homeUrl'
  | 'posts___nodes___language___id'
  | 'posts___nodes___language___locale'
  | 'posts___nodes___language___name'
  | 'posts___nodes___language___slug'
  | 'posts___nodes___link'
  | 'posts___nodes___modified'
  | 'posts___nodes___modifiedGmt'
  | 'posts___nodes___pingStatus'
  | 'posts___nodes___pinged'
  | 'posts___nodes___postFormats___nodes'
  | 'posts___nodes___realization___dateRealization'
  | 'posts___nodes___realization___describedTitle'
  | 'posts___nodes___realization___fieldGroupName'
  | 'posts___nodes___realization___location'
  | 'posts___nodes___realization___text'
  | 'posts___nodes___realization___title'
  | 'posts___nodes___slug'
  | 'posts___nodes___status'
  | 'posts___nodes___tags___nodes'
  | 'posts___nodes___template___templateName'
  | 'posts___nodes___terms___nodes'
  | 'posts___nodes___title'
  | 'posts___nodes___toPing'
  | 'posts___nodes___translations'
  | 'posts___nodes___translations___authorDatabaseId'
  | 'posts___nodes___translations___authorId'
  | 'posts___nodes___translations___commentCount'
  | 'posts___nodes___translations___commentStatus'
  | 'posts___nodes___translations___content'
  | 'posts___nodes___translations___contentTypeName'
  | 'posts___nodes___translations___databaseId'
  | 'posts___nodes___translations___date'
  | 'posts___nodes___translations___dateGmt'
  | 'posts___nodes___translations___desiredSlug'
  | 'posts___nodes___translations___enclosure'
  | 'posts___nodes___translations___excerpt'
  | 'posts___nodes___translations___featuredImageDatabaseId'
  | 'posts___nodes___translations___featuredImageId'
  | 'posts___nodes___translations___guid'
  | 'posts___nodes___translations___id'
  | 'posts___nodes___translations___isContentNode'
  | 'posts___nodes___translations___isRevision'
  | 'posts___nodes___translations___isSticky'
  | 'posts___nodes___translations___isTermNode'
  | 'posts___nodes___translations___link'
  | 'posts___nodes___translations___modified'
  | 'posts___nodes___translations___modifiedGmt'
  | 'posts___nodes___translations___pingStatus'
  | 'posts___nodes___translations___pinged'
  | 'posts___nodes___translations___slug'
  | 'posts___nodes___translations___status'
  | 'posts___nodes___translations___title'
  | 'posts___nodes___translations___toPing'
  | 'posts___nodes___translations___translations'
  | 'posts___nodes___translations___uri'
  | 'posts___nodes___translations___nodeType'
  | 'posts___nodes___translations___children'
  | 'posts___nodes___uri'
  | 'posts___nodes___nodeType'
  | 'posts___nodes___parent___id'
  | 'posts___nodes___parent___children'
  | 'posts___nodes___children'
  | 'posts___nodes___children___id'
  | 'posts___nodes___children___children'
  | 'posts___nodes___internal___content'
  | 'posts___nodes___internal___contentDigest'
  | 'posts___nodes___internal___description'
  | 'posts___nodes___internal___fieldOwners'
  | 'posts___nodes___internal___ignoreType'
  | 'posts___nodes___internal___mediaType'
  | 'posts___nodes___internal___owner'
  | 'posts___nodes___internal___type'
  | 'slug'
  | 'taxonomy___node___archivePath'
  | 'taxonomy___node___connectedContentTypes___nodes'
  | 'taxonomy___node___description'
  | 'taxonomy___node___graphqlPluralName'
  | 'taxonomy___node___graphqlSingleName'
  | 'taxonomy___node___hierarchical'
  | 'taxonomy___node___id'
  | 'taxonomy___node___label'
  | 'taxonomy___node___name'
  | 'taxonomy___node___public'
  | 'taxonomy___node___restBase'
  | 'taxonomy___node___restControllerClass'
  | 'taxonomy___node___showCloud'
  | 'taxonomy___node___showInAdminColumn'
  | 'taxonomy___node___showInGraphql'
  | 'taxonomy___node___showInMenu'
  | 'taxonomy___node___showInNavMenus'
  | 'taxonomy___node___showInQuickEdit'
  | 'taxonomy___node___showInRest'
  | 'taxonomy___node___showUi'
  | 'taxonomy___node___nodeType'
  | 'taxonomy___node___parent___id'
  | 'taxonomy___node___parent___children'
  | 'taxonomy___node___children'
  | 'taxonomy___node___children___id'
  | 'taxonomy___node___children___children'
  | 'taxonomy___node___internal___content'
  | 'taxonomy___node___internal___contentDigest'
  | 'taxonomy___node___internal___description'
  | 'taxonomy___node___internal___fieldOwners'
  | 'taxonomy___node___internal___ignoreType'
  | 'taxonomy___node___internal___mediaType'
  | 'taxonomy___node___internal___owner'
  | 'taxonomy___node___internal___type'
  | 'taxonomyName'
  | 'termGroupId'
  | 'termTaxonomyId'
  | 'translations'
  | 'translations___ancestors___nodes'
  | 'translations___ancestors___nodes___count'
  | 'translations___ancestors___nodes___databaseId'
  | 'translations___ancestors___nodes___description'
  | 'translations___ancestors___nodes___id'
  | 'translations___ancestors___nodes___isContentNode'
  | 'translations___ancestors___nodes___isTermNode'
  | 'translations___ancestors___nodes___link'
  | 'translations___ancestors___nodes___name'
  | 'translations___ancestors___nodes___parentDatabaseId'
  | 'translations___ancestors___nodes___parentId'
  | 'translations___ancestors___nodes___slug'
  | 'translations___ancestors___nodes___taxonomyName'
  | 'translations___ancestors___nodes___termGroupId'
  | 'translations___ancestors___nodes___termTaxonomyId'
  | 'translations___ancestors___nodes___translations'
  | 'translations___ancestors___nodes___uri'
  | 'translations___ancestors___nodes___nodeType'
  | 'translations___ancestors___nodes___children'
  | 'translations___wpChildren___nodes'
  | 'translations___wpChildren___nodes___count'
  | 'translations___wpChildren___nodes___databaseId'
  | 'translations___wpChildren___nodes___description'
  | 'translations___wpChildren___nodes___id'
  | 'translations___wpChildren___nodes___isContentNode'
  | 'translations___wpChildren___nodes___isTermNode'
  | 'translations___wpChildren___nodes___link'
  | 'translations___wpChildren___nodes___name'
  | 'translations___wpChildren___nodes___parentDatabaseId'
  | 'translations___wpChildren___nodes___parentId'
  | 'translations___wpChildren___nodes___slug'
  | 'translations___wpChildren___nodes___taxonomyName'
  | 'translations___wpChildren___nodes___termGroupId'
  | 'translations___wpChildren___nodes___termTaxonomyId'
  | 'translations___wpChildren___nodes___translations'
  | 'translations___wpChildren___nodes___uri'
  | 'translations___wpChildren___nodes___nodeType'
  | 'translations___wpChildren___nodes___children'
  | 'translations___contentNodes___nodes'
  | 'translations___contentNodes___nodes___contentTypeName'
  | 'translations___contentNodes___nodes___databaseId'
  | 'translations___contentNodes___nodes___date'
  | 'translations___contentNodes___nodes___dateGmt'
  | 'translations___contentNodes___nodes___desiredSlug'
  | 'translations___contentNodes___nodes___enclosure'
  | 'translations___contentNodes___nodes___guid'
  | 'translations___contentNodes___nodes___id'
  | 'translations___contentNodes___nodes___isContentNode'
  | 'translations___contentNodes___nodes___isTermNode'
  | 'translations___contentNodes___nodes___link'
  | 'translations___contentNodes___nodes___modified'
  | 'translations___contentNodes___nodes___modifiedGmt'
  | 'translations___contentNodes___nodes___slug'
  | 'translations___contentNodes___nodes___status'
  | 'translations___contentNodes___nodes___uri'
  | 'translations___contentNodes___nodes___nodeType'
  | 'translations___contentNodes___nodes___children'
  | 'translations___count'
  | 'translations___databaseId'
  | 'translations___description'
  | 'translations___id'
  | 'translations___isContentNode'
  | 'translations___isTermNode'
  | 'translations___language___code'
  | 'translations___language___homeUrl'
  | 'translations___language___id'
  | 'translations___language___locale'
  | 'translations___language___name'
  | 'translations___language___slug'
  | 'translations___link'
  | 'translations___name'
  | 'translations___wpParent___node___count'
  | 'translations___wpParent___node___databaseId'
  | 'translations___wpParent___node___description'
  | 'translations___wpParent___node___id'
  | 'translations___wpParent___node___isContentNode'
  | 'translations___wpParent___node___isTermNode'
  | 'translations___wpParent___node___link'
  | 'translations___wpParent___node___name'
  | 'translations___wpParent___node___parentDatabaseId'
  | 'translations___wpParent___node___parentId'
  | 'translations___wpParent___node___slug'
  | 'translations___wpParent___node___taxonomyName'
  | 'translations___wpParent___node___termGroupId'
  | 'translations___wpParent___node___termTaxonomyId'
  | 'translations___wpParent___node___translations'
  | 'translations___wpParent___node___uri'
  | 'translations___wpParent___node___nodeType'
  | 'translations___wpParent___node___children'
  | 'translations___parentDatabaseId'
  | 'translations___parentId'
  | 'translations___posts___nodes'
  | 'translations___posts___nodes___authorDatabaseId'
  | 'translations___posts___nodes___authorId'
  | 'translations___posts___nodes___commentCount'
  | 'translations___posts___nodes___commentStatus'
  | 'translations___posts___nodes___content'
  | 'translations___posts___nodes___contentTypeName'
  | 'translations___posts___nodes___databaseId'
  | 'translations___posts___nodes___date'
  | 'translations___posts___nodes___dateGmt'
  | 'translations___posts___nodes___desiredSlug'
  | 'translations___posts___nodes___enclosure'
  | 'translations___posts___nodes___excerpt'
  | 'translations___posts___nodes___featuredImageDatabaseId'
  | 'translations___posts___nodes___featuredImageId'
  | 'translations___posts___nodes___guid'
  | 'translations___posts___nodes___id'
  | 'translations___posts___nodes___isContentNode'
  | 'translations___posts___nodes___isRevision'
  | 'translations___posts___nodes___isSticky'
  | 'translations___posts___nodes___isTermNode'
  | 'translations___posts___nodes___link'
  | 'translations___posts___nodes___modified'
  | 'translations___posts___nodes___modifiedGmt'
  | 'translations___posts___nodes___pingStatus'
  | 'translations___posts___nodes___pinged'
  | 'translations___posts___nodes___slug'
  | 'translations___posts___nodes___status'
  | 'translations___posts___nodes___title'
  | 'translations___posts___nodes___toPing'
  | 'translations___posts___nodes___translations'
  | 'translations___posts___nodes___uri'
  | 'translations___posts___nodes___nodeType'
  | 'translations___posts___nodes___children'
  | 'translations___slug'
  | 'translations___taxonomy___node___archivePath'
  | 'translations___taxonomy___node___description'
  | 'translations___taxonomy___node___graphqlPluralName'
  | 'translations___taxonomy___node___graphqlSingleName'
  | 'translations___taxonomy___node___hierarchical'
  | 'translations___taxonomy___node___id'
  | 'translations___taxonomy___node___label'
  | 'translations___taxonomy___node___name'
  | 'translations___taxonomy___node___public'
  | 'translations___taxonomy___node___restBase'
  | 'translations___taxonomy___node___restControllerClass'
  | 'translations___taxonomy___node___showCloud'
  | 'translations___taxonomy___node___showInAdminColumn'
  | 'translations___taxonomy___node___showInGraphql'
  | 'translations___taxonomy___node___showInMenu'
  | 'translations___taxonomy___node___showInNavMenus'
  | 'translations___taxonomy___node___showInQuickEdit'
  | 'translations___taxonomy___node___showInRest'
  | 'translations___taxonomy___node___showUi'
  | 'translations___taxonomy___node___nodeType'
  | 'translations___taxonomy___node___children'
  | 'translations___taxonomyName'
  | 'translations___termGroupId'
  | 'translations___termTaxonomyId'
  | 'translations___translations'
  | 'translations___translations___ancestors___nodes'
  | 'translations___translations___wpChildren___nodes'
  | 'translations___translations___contentNodes___nodes'
  | 'translations___translations___count'
  | 'translations___translations___databaseId'
  | 'translations___translations___description'
  | 'translations___translations___id'
  | 'translations___translations___isContentNode'
  | 'translations___translations___isTermNode'
  | 'translations___translations___language___code'
  | 'translations___translations___language___homeUrl'
  | 'translations___translations___language___id'
  | 'translations___translations___language___locale'
  | 'translations___translations___language___name'
  | 'translations___translations___language___slug'
  | 'translations___translations___link'
  | 'translations___translations___name'
  | 'translations___translations___parentDatabaseId'
  | 'translations___translations___parentId'
  | 'translations___translations___posts___nodes'
  | 'translations___translations___slug'
  | 'translations___translations___taxonomyName'
  | 'translations___translations___termGroupId'
  | 'translations___translations___termTaxonomyId'
  | 'translations___translations___translations'
  | 'translations___translations___translations___count'
  | 'translations___translations___translations___databaseId'
  | 'translations___translations___translations___description'
  | 'translations___translations___translations___id'
  | 'translations___translations___translations___isContentNode'
  | 'translations___translations___translations___isTermNode'
  | 'translations___translations___translations___link'
  | 'translations___translations___translations___name'
  | 'translations___translations___translations___parentDatabaseId'
  | 'translations___translations___translations___parentId'
  | 'translations___translations___translations___slug'
  | 'translations___translations___translations___taxonomyName'
  | 'translations___translations___translations___termGroupId'
  | 'translations___translations___translations___termTaxonomyId'
  | 'translations___translations___translations___translations'
  | 'translations___translations___translations___uri'
  | 'translations___translations___translations___nodeType'
  | 'translations___translations___translations___children'
  | 'translations___translations___uri'
  | 'translations___translations___nodeType'
  | 'translations___translations___parent___id'
  | 'translations___translations___parent___children'
  | 'translations___translations___children'
  | 'translations___translations___children___id'
  | 'translations___translations___children___children'
  | 'translations___translations___internal___content'
  | 'translations___translations___internal___contentDigest'
  | 'translations___translations___internal___description'
  | 'translations___translations___internal___fieldOwners'
  | 'translations___translations___internal___ignoreType'
  | 'translations___translations___internal___mediaType'
  | 'translations___translations___internal___owner'
  | 'translations___translations___internal___type'
  | 'translations___uri'
  | 'translations___nodeType'
  | 'translations___parent___id'
  | 'translations___parent___parent___id'
  | 'translations___parent___parent___children'
  | 'translations___parent___children'
  | 'translations___parent___children___id'
  | 'translations___parent___children___children'
  | 'translations___parent___internal___content'
  | 'translations___parent___internal___contentDigest'
  | 'translations___parent___internal___description'
  | 'translations___parent___internal___fieldOwners'
  | 'translations___parent___internal___ignoreType'
  | 'translations___parent___internal___mediaType'
  | 'translations___parent___internal___owner'
  | 'translations___parent___internal___type'
  | 'translations___children'
  | 'translations___children___id'
  | 'translations___children___parent___id'
  | 'translations___children___parent___children'
  | 'translations___children___children'
  | 'translations___children___children___id'
  | 'translations___children___children___children'
  | 'translations___children___internal___content'
  | 'translations___children___internal___contentDigest'
  | 'translations___children___internal___description'
  | 'translations___children___internal___fieldOwners'
  | 'translations___children___internal___ignoreType'
  | 'translations___children___internal___mediaType'
  | 'translations___children___internal___owner'
  | 'translations___children___internal___type'
  | 'translations___internal___content'
  | 'translations___internal___contentDigest'
  | 'translations___internal___description'
  | 'translations___internal___fieldOwners'
  | 'translations___internal___ignoreType'
  | 'translations___internal___mediaType'
  | 'translations___internal___owner'
  | 'translations___internal___type'
  | 'uri'
  | 'nodeType'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type WpCategoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpCategoryEdge>;
  nodes: Array<WpCategory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<WpCategoryGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type WpCategoryGroupConnectionDistinctArgs = {
  field: WpCategoryFieldsEnum;
};


export type WpCategoryGroupConnectionMaxArgs = {
  field: WpCategoryFieldsEnum;
};


export type WpCategoryGroupConnectionMinArgs = {
  field: WpCategoryFieldsEnum;
};


export type WpCategoryGroupConnectionSumArgs = {
  field: WpCategoryFieldsEnum;
};


export type WpCategoryGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: WpCategoryFieldsEnum;
};

export type WpCategorySortInput = {
  fields?: InputMaybe<Array<InputMaybe<WpCategoryFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type WpPostFormatConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpPostFormatEdge>;
  nodes: Array<WpPostFormat>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<WpPostFormatGroupConnection>;
};


export type WpPostFormatConnectionDistinctArgs = {
  field: WpPostFormatFieldsEnum;
};


export type WpPostFormatConnectionMaxArgs = {
  field: WpPostFormatFieldsEnum;
};


export type WpPostFormatConnectionMinArgs = {
  field: WpPostFormatFieldsEnum;
};


export type WpPostFormatConnectionSumArgs = {
  field: WpPostFormatFieldsEnum;
};


export type WpPostFormatConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: WpPostFormatFieldsEnum;
};

export type WpPostFormatEdge = {
  next?: Maybe<WpPostFormat>;
  node: WpPostFormat;
  previous?: Maybe<WpPostFormat>;
};

export type WpPostFormatFieldsEnum =
  | 'contentNodes___nodes'
  | 'contentNodes___nodes___contentTypeName'
  | 'contentNodes___nodes___databaseId'
  | 'contentNodes___nodes___date'
  | 'contentNodes___nodes___dateGmt'
  | 'contentNodes___nodes___desiredSlug'
  | 'contentNodes___nodes___enclosure'
  | 'contentNodes___nodes___guid'
  | 'contentNodes___nodes___id'
  | 'contentNodes___nodes___isContentNode'
  | 'contentNodes___nodes___isTermNode'
  | 'contentNodes___nodes___link'
  | 'contentNodes___nodes___modified'
  | 'contentNodes___nodes___modifiedGmt'
  | 'contentNodes___nodes___slug'
  | 'contentNodes___nodes___status'
  | 'contentNodes___nodes___template___templateName'
  | 'contentNodes___nodes___uri'
  | 'contentNodes___nodes___nodeType'
  | 'contentNodes___nodes___parent___id'
  | 'contentNodes___nodes___parent___children'
  | 'contentNodes___nodes___children'
  | 'contentNodes___nodes___children___id'
  | 'contentNodes___nodes___children___children'
  | 'contentNodes___nodes___internal___content'
  | 'contentNodes___nodes___internal___contentDigest'
  | 'contentNodes___nodes___internal___description'
  | 'contentNodes___nodes___internal___fieldOwners'
  | 'contentNodes___nodes___internal___ignoreType'
  | 'contentNodes___nodes___internal___mediaType'
  | 'contentNodes___nodes___internal___owner'
  | 'contentNodes___nodes___internal___type'
  | 'count'
  | 'databaseId'
  | 'description'
  | 'id'
  | 'isContentNode'
  | 'isTermNode'
  | 'link'
  | 'name'
  | 'posts___nodes'
  | 'posts___nodes___authorDatabaseId'
  | 'posts___nodes___authorId'
  | 'posts___nodes___categories___nodes'
  | 'posts___nodes___commentCount'
  | 'posts___nodes___commentStatus'
  | 'posts___nodes___comments___nodes'
  | 'posts___nodes___content'
  | 'posts___nodes___contentTypeName'
  | 'posts___nodes___databaseId'
  | 'posts___nodes___date'
  | 'posts___nodes___dateGmt'
  | 'posts___nodes___desiredSlug'
  | 'posts___nodes___enclosure'
  | 'posts___nodes___excerpt'
  | 'posts___nodes___featuredImageDatabaseId'
  | 'posts___nodes___featuredImageId'
  | 'posts___nodes___guid'
  | 'posts___nodes___id'
  | 'posts___nodes___isContentNode'
  | 'posts___nodes___isRevision'
  | 'posts___nodes___isSticky'
  | 'posts___nodes___isTermNode'
  | 'posts___nodes___language___code'
  | 'posts___nodes___language___homeUrl'
  | 'posts___nodes___language___id'
  | 'posts___nodes___language___locale'
  | 'posts___nodes___language___name'
  | 'posts___nodes___language___slug'
  | 'posts___nodes___link'
  | 'posts___nodes___modified'
  | 'posts___nodes___modifiedGmt'
  | 'posts___nodes___pingStatus'
  | 'posts___nodes___pinged'
  | 'posts___nodes___postFormats___nodes'
  | 'posts___nodes___realization___dateRealization'
  | 'posts___nodes___realization___describedTitle'
  | 'posts___nodes___realization___fieldGroupName'
  | 'posts___nodes___realization___location'
  | 'posts___nodes___realization___text'
  | 'posts___nodes___realization___title'
  | 'posts___nodes___slug'
  | 'posts___nodes___status'
  | 'posts___nodes___tags___nodes'
  | 'posts___nodes___template___templateName'
  | 'posts___nodes___terms___nodes'
  | 'posts___nodes___title'
  | 'posts___nodes___toPing'
  | 'posts___nodes___translations'
  | 'posts___nodes___translations___authorDatabaseId'
  | 'posts___nodes___translations___authorId'
  | 'posts___nodes___translations___commentCount'
  | 'posts___nodes___translations___commentStatus'
  | 'posts___nodes___translations___content'
  | 'posts___nodes___translations___contentTypeName'
  | 'posts___nodes___translations___databaseId'
  | 'posts___nodes___translations___date'
  | 'posts___nodes___translations___dateGmt'
  | 'posts___nodes___translations___desiredSlug'
  | 'posts___nodes___translations___enclosure'
  | 'posts___nodes___translations___excerpt'
  | 'posts___nodes___translations___featuredImageDatabaseId'
  | 'posts___nodes___translations___featuredImageId'
  | 'posts___nodes___translations___guid'
  | 'posts___nodes___translations___id'
  | 'posts___nodes___translations___isContentNode'
  | 'posts___nodes___translations___isRevision'
  | 'posts___nodes___translations___isSticky'
  | 'posts___nodes___translations___isTermNode'
  | 'posts___nodes___translations___link'
  | 'posts___nodes___translations___modified'
  | 'posts___nodes___translations___modifiedGmt'
  | 'posts___nodes___translations___pingStatus'
  | 'posts___nodes___translations___pinged'
  | 'posts___nodes___translations___slug'
  | 'posts___nodes___translations___status'
  | 'posts___nodes___translations___title'
  | 'posts___nodes___translations___toPing'
  | 'posts___nodes___translations___translations'
  | 'posts___nodes___translations___uri'
  | 'posts___nodes___translations___nodeType'
  | 'posts___nodes___translations___children'
  | 'posts___nodes___uri'
  | 'posts___nodes___nodeType'
  | 'posts___nodes___parent___id'
  | 'posts___nodes___parent___children'
  | 'posts___nodes___children'
  | 'posts___nodes___children___id'
  | 'posts___nodes___children___children'
  | 'posts___nodes___internal___content'
  | 'posts___nodes___internal___contentDigest'
  | 'posts___nodes___internal___description'
  | 'posts___nodes___internal___fieldOwners'
  | 'posts___nodes___internal___ignoreType'
  | 'posts___nodes___internal___mediaType'
  | 'posts___nodes___internal___owner'
  | 'posts___nodes___internal___type'
  | 'slug'
  | 'taxonomy___node___archivePath'
  | 'taxonomy___node___connectedContentTypes___nodes'
  | 'taxonomy___node___description'
  | 'taxonomy___node___graphqlPluralName'
  | 'taxonomy___node___graphqlSingleName'
  | 'taxonomy___node___hierarchical'
  | 'taxonomy___node___id'
  | 'taxonomy___node___label'
  | 'taxonomy___node___name'
  | 'taxonomy___node___public'
  | 'taxonomy___node___restBase'
  | 'taxonomy___node___restControllerClass'
  | 'taxonomy___node___showCloud'
  | 'taxonomy___node___showInAdminColumn'
  | 'taxonomy___node___showInGraphql'
  | 'taxonomy___node___showInMenu'
  | 'taxonomy___node___showInNavMenus'
  | 'taxonomy___node___showInQuickEdit'
  | 'taxonomy___node___showInRest'
  | 'taxonomy___node___showUi'
  | 'taxonomy___node___nodeType'
  | 'taxonomy___node___parent___id'
  | 'taxonomy___node___parent___children'
  | 'taxonomy___node___children'
  | 'taxonomy___node___children___id'
  | 'taxonomy___node___children___children'
  | 'taxonomy___node___internal___content'
  | 'taxonomy___node___internal___contentDigest'
  | 'taxonomy___node___internal___description'
  | 'taxonomy___node___internal___fieldOwners'
  | 'taxonomy___node___internal___ignoreType'
  | 'taxonomy___node___internal___mediaType'
  | 'taxonomy___node___internal___owner'
  | 'taxonomy___node___internal___type'
  | 'taxonomyName'
  | 'termGroupId'
  | 'termTaxonomyId'
  | 'uri'
  | 'nodeType'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type WpPostFormatGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpPostFormatEdge>;
  nodes: Array<WpPostFormat>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<WpPostFormatGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type WpPostFormatGroupConnectionDistinctArgs = {
  field: WpPostFormatFieldsEnum;
};


export type WpPostFormatGroupConnectionMaxArgs = {
  field: WpPostFormatFieldsEnum;
};


export type WpPostFormatGroupConnectionMinArgs = {
  field: WpPostFormatFieldsEnum;
};


export type WpPostFormatGroupConnectionSumArgs = {
  field: WpPostFormatFieldsEnum;
};


export type WpPostFormatGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: WpPostFormatFieldsEnum;
};

export type WpPostFormatSortInput = {
  fields?: InputMaybe<Array<InputMaybe<WpPostFormatFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type WpTagConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpTagEdge>;
  nodes: Array<WpTag>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<WpTagGroupConnection>;
};


export type WpTagConnectionDistinctArgs = {
  field: WpTagFieldsEnum;
};


export type WpTagConnectionMaxArgs = {
  field: WpTagFieldsEnum;
};


export type WpTagConnectionMinArgs = {
  field: WpTagFieldsEnum;
};


export type WpTagConnectionSumArgs = {
  field: WpTagFieldsEnum;
};


export type WpTagConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: WpTagFieldsEnum;
};

export type WpTagEdge = {
  next?: Maybe<WpTag>;
  node: WpTag;
  previous?: Maybe<WpTag>;
};

export type WpTagFieldsEnum =
  | 'contentNodes___nodes'
  | 'contentNodes___nodes___contentTypeName'
  | 'contentNodes___nodes___databaseId'
  | 'contentNodes___nodes___date'
  | 'contentNodes___nodes___dateGmt'
  | 'contentNodes___nodes___desiredSlug'
  | 'contentNodes___nodes___enclosure'
  | 'contentNodes___nodes___guid'
  | 'contentNodes___nodes___id'
  | 'contentNodes___nodes___isContentNode'
  | 'contentNodes___nodes___isTermNode'
  | 'contentNodes___nodes___link'
  | 'contentNodes___nodes___modified'
  | 'contentNodes___nodes___modifiedGmt'
  | 'contentNodes___nodes___slug'
  | 'contentNodes___nodes___status'
  | 'contentNodes___nodes___template___templateName'
  | 'contentNodes___nodes___uri'
  | 'contentNodes___nodes___nodeType'
  | 'contentNodes___nodes___parent___id'
  | 'contentNodes___nodes___parent___children'
  | 'contentNodes___nodes___children'
  | 'contentNodes___nodes___children___id'
  | 'contentNodes___nodes___children___children'
  | 'contentNodes___nodes___internal___content'
  | 'contentNodes___nodes___internal___contentDigest'
  | 'contentNodes___nodes___internal___description'
  | 'contentNodes___nodes___internal___fieldOwners'
  | 'contentNodes___nodes___internal___ignoreType'
  | 'contentNodes___nodes___internal___mediaType'
  | 'contentNodes___nodes___internal___owner'
  | 'contentNodes___nodes___internal___type'
  | 'count'
  | 'databaseId'
  | 'description'
  | 'id'
  | 'isContentNode'
  | 'isTermNode'
  | 'language___code'
  | 'language___homeUrl'
  | 'language___id'
  | 'language___locale'
  | 'language___name'
  | 'language___slug'
  | 'link'
  | 'name'
  | 'posts___nodes'
  | 'posts___nodes___authorDatabaseId'
  | 'posts___nodes___authorId'
  | 'posts___nodes___categories___nodes'
  | 'posts___nodes___commentCount'
  | 'posts___nodes___commentStatus'
  | 'posts___nodes___comments___nodes'
  | 'posts___nodes___content'
  | 'posts___nodes___contentTypeName'
  | 'posts___nodes___databaseId'
  | 'posts___nodes___date'
  | 'posts___nodes___dateGmt'
  | 'posts___nodes___desiredSlug'
  | 'posts___nodes___enclosure'
  | 'posts___nodes___excerpt'
  | 'posts___nodes___featuredImageDatabaseId'
  | 'posts___nodes___featuredImageId'
  | 'posts___nodes___guid'
  | 'posts___nodes___id'
  | 'posts___nodes___isContentNode'
  | 'posts___nodes___isRevision'
  | 'posts___nodes___isSticky'
  | 'posts___nodes___isTermNode'
  | 'posts___nodes___language___code'
  | 'posts___nodes___language___homeUrl'
  | 'posts___nodes___language___id'
  | 'posts___nodes___language___locale'
  | 'posts___nodes___language___name'
  | 'posts___nodes___language___slug'
  | 'posts___nodes___link'
  | 'posts___nodes___modified'
  | 'posts___nodes___modifiedGmt'
  | 'posts___nodes___pingStatus'
  | 'posts___nodes___pinged'
  | 'posts___nodes___postFormats___nodes'
  | 'posts___nodes___realization___dateRealization'
  | 'posts___nodes___realization___describedTitle'
  | 'posts___nodes___realization___fieldGroupName'
  | 'posts___nodes___realization___location'
  | 'posts___nodes___realization___text'
  | 'posts___nodes___realization___title'
  | 'posts___nodes___slug'
  | 'posts___nodes___status'
  | 'posts___nodes___tags___nodes'
  | 'posts___nodes___template___templateName'
  | 'posts___nodes___terms___nodes'
  | 'posts___nodes___title'
  | 'posts___nodes___toPing'
  | 'posts___nodes___translations'
  | 'posts___nodes___translations___authorDatabaseId'
  | 'posts___nodes___translations___authorId'
  | 'posts___nodes___translations___commentCount'
  | 'posts___nodes___translations___commentStatus'
  | 'posts___nodes___translations___content'
  | 'posts___nodes___translations___contentTypeName'
  | 'posts___nodes___translations___databaseId'
  | 'posts___nodes___translations___date'
  | 'posts___nodes___translations___dateGmt'
  | 'posts___nodes___translations___desiredSlug'
  | 'posts___nodes___translations___enclosure'
  | 'posts___nodes___translations___excerpt'
  | 'posts___nodes___translations___featuredImageDatabaseId'
  | 'posts___nodes___translations___featuredImageId'
  | 'posts___nodes___translations___guid'
  | 'posts___nodes___translations___id'
  | 'posts___nodes___translations___isContentNode'
  | 'posts___nodes___translations___isRevision'
  | 'posts___nodes___translations___isSticky'
  | 'posts___nodes___translations___isTermNode'
  | 'posts___nodes___translations___link'
  | 'posts___nodes___translations___modified'
  | 'posts___nodes___translations___modifiedGmt'
  | 'posts___nodes___translations___pingStatus'
  | 'posts___nodes___translations___pinged'
  | 'posts___nodes___translations___slug'
  | 'posts___nodes___translations___status'
  | 'posts___nodes___translations___title'
  | 'posts___nodes___translations___toPing'
  | 'posts___nodes___translations___translations'
  | 'posts___nodes___translations___uri'
  | 'posts___nodes___translations___nodeType'
  | 'posts___nodes___translations___children'
  | 'posts___nodes___uri'
  | 'posts___nodes___nodeType'
  | 'posts___nodes___parent___id'
  | 'posts___nodes___parent___children'
  | 'posts___nodes___children'
  | 'posts___nodes___children___id'
  | 'posts___nodes___children___children'
  | 'posts___nodes___internal___content'
  | 'posts___nodes___internal___contentDigest'
  | 'posts___nodes___internal___description'
  | 'posts___nodes___internal___fieldOwners'
  | 'posts___nodes___internal___ignoreType'
  | 'posts___nodes___internal___mediaType'
  | 'posts___nodes___internal___owner'
  | 'posts___nodes___internal___type'
  | 'slug'
  | 'taxonomy___node___archivePath'
  | 'taxonomy___node___connectedContentTypes___nodes'
  | 'taxonomy___node___description'
  | 'taxonomy___node___graphqlPluralName'
  | 'taxonomy___node___graphqlSingleName'
  | 'taxonomy___node___hierarchical'
  | 'taxonomy___node___id'
  | 'taxonomy___node___label'
  | 'taxonomy___node___name'
  | 'taxonomy___node___public'
  | 'taxonomy___node___restBase'
  | 'taxonomy___node___restControllerClass'
  | 'taxonomy___node___showCloud'
  | 'taxonomy___node___showInAdminColumn'
  | 'taxonomy___node___showInGraphql'
  | 'taxonomy___node___showInMenu'
  | 'taxonomy___node___showInNavMenus'
  | 'taxonomy___node___showInQuickEdit'
  | 'taxonomy___node___showInRest'
  | 'taxonomy___node___showUi'
  | 'taxonomy___node___nodeType'
  | 'taxonomy___node___parent___id'
  | 'taxonomy___node___parent___children'
  | 'taxonomy___node___children'
  | 'taxonomy___node___children___id'
  | 'taxonomy___node___children___children'
  | 'taxonomy___node___internal___content'
  | 'taxonomy___node___internal___contentDigest'
  | 'taxonomy___node___internal___description'
  | 'taxonomy___node___internal___fieldOwners'
  | 'taxonomy___node___internal___ignoreType'
  | 'taxonomy___node___internal___mediaType'
  | 'taxonomy___node___internal___owner'
  | 'taxonomy___node___internal___type'
  | 'taxonomyName'
  | 'termGroupId'
  | 'termTaxonomyId'
  | 'translations'
  | 'translations___contentNodes___nodes'
  | 'translations___contentNodes___nodes___contentTypeName'
  | 'translations___contentNodes___nodes___databaseId'
  | 'translations___contentNodes___nodes___date'
  | 'translations___contentNodes___nodes___dateGmt'
  | 'translations___contentNodes___nodes___desiredSlug'
  | 'translations___contentNodes___nodes___enclosure'
  | 'translations___contentNodes___nodes___guid'
  | 'translations___contentNodes___nodes___id'
  | 'translations___contentNodes___nodes___isContentNode'
  | 'translations___contentNodes___nodes___isTermNode'
  | 'translations___contentNodes___nodes___link'
  | 'translations___contentNodes___nodes___modified'
  | 'translations___contentNodes___nodes___modifiedGmt'
  | 'translations___contentNodes___nodes___slug'
  | 'translations___contentNodes___nodes___status'
  | 'translations___contentNodes___nodes___uri'
  | 'translations___contentNodes___nodes___nodeType'
  | 'translations___contentNodes___nodes___children'
  | 'translations___count'
  | 'translations___databaseId'
  | 'translations___description'
  | 'translations___id'
  | 'translations___isContentNode'
  | 'translations___isTermNode'
  | 'translations___language___code'
  | 'translations___language___homeUrl'
  | 'translations___language___id'
  | 'translations___language___locale'
  | 'translations___language___name'
  | 'translations___language___slug'
  | 'translations___link'
  | 'translations___name'
  | 'translations___posts___nodes'
  | 'translations___posts___nodes___authorDatabaseId'
  | 'translations___posts___nodes___authorId'
  | 'translations___posts___nodes___commentCount'
  | 'translations___posts___nodes___commentStatus'
  | 'translations___posts___nodes___content'
  | 'translations___posts___nodes___contentTypeName'
  | 'translations___posts___nodes___databaseId'
  | 'translations___posts___nodes___date'
  | 'translations___posts___nodes___dateGmt'
  | 'translations___posts___nodes___desiredSlug'
  | 'translations___posts___nodes___enclosure'
  | 'translations___posts___nodes___excerpt'
  | 'translations___posts___nodes___featuredImageDatabaseId'
  | 'translations___posts___nodes___featuredImageId'
  | 'translations___posts___nodes___guid'
  | 'translations___posts___nodes___id'
  | 'translations___posts___nodes___isContentNode'
  | 'translations___posts___nodes___isRevision'
  | 'translations___posts___nodes___isSticky'
  | 'translations___posts___nodes___isTermNode'
  | 'translations___posts___nodes___link'
  | 'translations___posts___nodes___modified'
  | 'translations___posts___nodes___modifiedGmt'
  | 'translations___posts___nodes___pingStatus'
  | 'translations___posts___nodes___pinged'
  | 'translations___posts___nodes___slug'
  | 'translations___posts___nodes___status'
  | 'translations___posts___nodes___title'
  | 'translations___posts___nodes___toPing'
  | 'translations___posts___nodes___translations'
  | 'translations___posts___nodes___uri'
  | 'translations___posts___nodes___nodeType'
  | 'translations___posts___nodes___children'
  | 'translations___slug'
  | 'translations___taxonomy___node___archivePath'
  | 'translations___taxonomy___node___description'
  | 'translations___taxonomy___node___graphqlPluralName'
  | 'translations___taxonomy___node___graphqlSingleName'
  | 'translations___taxonomy___node___hierarchical'
  | 'translations___taxonomy___node___id'
  | 'translations___taxonomy___node___label'
  | 'translations___taxonomy___node___name'
  | 'translations___taxonomy___node___public'
  | 'translations___taxonomy___node___restBase'
  | 'translations___taxonomy___node___restControllerClass'
  | 'translations___taxonomy___node___showCloud'
  | 'translations___taxonomy___node___showInAdminColumn'
  | 'translations___taxonomy___node___showInGraphql'
  | 'translations___taxonomy___node___showInMenu'
  | 'translations___taxonomy___node___showInNavMenus'
  | 'translations___taxonomy___node___showInQuickEdit'
  | 'translations___taxonomy___node___showInRest'
  | 'translations___taxonomy___node___showUi'
  | 'translations___taxonomy___node___nodeType'
  | 'translations___taxonomy___node___children'
  | 'translations___taxonomyName'
  | 'translations___termGroupId'
  | 'translations___termTaxonomyId'
  | 'translations___translations'
  | 'translations___translations___contentNodes___nodes'
  | 'translations___translations___count'
  | 'translations___translations___databaseId'
  | 'translations___translations___description'
  | 'translations___translations___id'
  | 'translations___translations___isContentNode'
  | 'translations___translations___isTermNode'
  | 'translations___translations___language___code'
  | 'translations___translations___language___homeUrl'
  | 'translations___translations___language___id'
  | 'translations___translations___language___locale'
  | 'translations___translations___language___name'
  | 'translations___translations___language___slug'
  | 'translations___translations___link'
  | 'translations___translations___name'
  | 'translations___translations___posts___nodes'
  | 'translations___translations___slug'
  | 'translations___translations___taxonomyName'
  | 'translations___translations___termGroupId'
  | 'translations___translations___termTaxonomyId'
  | 'translations___translations___translations'
  | 'translations___translations___translations___count'
  | 'translations___translations___translations___databaseId'
  | 'translations___translations___translations___description'
  | 'translations___translations___translations___id'
  | 'translations___translations___translations___isContentNode'
  | 'translations___translations___translations___isTermNode'
  | 'translations___translations___translations___link'
  | 'translations___translations___translations___name'
  | 'translations___translations___translations___slug'
  | 'translations___translations___translations___taxonomyName'
  | 'translations___translations___translations___termGroupId'
  | 'translations___translations___translations___termTaxonomyId'
  | 'translations___translations___translations___translations'
  | 'translations___translations___translations___uri'
  | 'translations___translations___translations___nodeType'
  | 'translations___translations___translations___children'
  | 'translations___translations___uri'
  | 'translations___translations___nodeType'
  | 'translations___translations___parent___id'
  | 'translations___translations___parent___children'
  | 'translations___translations___children'
  | 'translations___translations___children___id'
  | 'translations___translations___children___children'
  | 'translations___translations___internal___content'
  | 'translations___translations___internal___contentDigest'
  | 'translations___translations___internal___description'
  | 'translations___translations___internal___fieldOwners'
  | 'translations___translations___internal___ignoreType'
  | 'translations___translations___internal___mediaType'
  | 'translations___translations___internal___owner'
  | 'translations___translations___internal___type'
  | 'translations___uri'
  | 'translations___nodeType'
  | 'translations___parent___id'
  | 'translations___parent___parent___id'
  | 'translations___parent___parent___children'
  | 'translations___parent___children'
  | 'translations___parent___children___id'
  | 'translations___parent___children___children'
  | 'translations___parent___internal___content'
  | 'translations___parent___internal___contentDigest'
  | 'translations___parent___internal___description'
  | 'translations___parent___internal___fieldOwners'
  | 'translations___parent___internal___ignoreType'
  | 'translations___parent___internal___mediaType'
  | 'translations___parent___internal___owner'
  | 'translations___parent___internal___type'
  | 'translations___children'
  | 'translations___children___id'
  | 'translations___children___parent___id'
  | 'translations___children___parent___children'
  | 'translations___children___children'
  | 'translations___children___children___id'
  | 'translations___children___children___children'
  | 'translations___children___internal___content'
  | 'translations___children___internal___contentDigest'
  | 'translations___children___internal___description'
  | 'translations___children___internal___fieldOwners'
  | 'translations___children___internal___ignoreType'
  | 'translations___children___internal___mediaType'
  | 'translations___children___internal___owner'
  | 'translations___children___internal___type'
  | 'translations___internal___content'
  | 'translations___internal___contentDigest'
  | 'translations___internal___description'
  | 'translations___internal___fieldOwners'
  | 'translations___internal___ignoreType'
  | 'translations___internal___mediaType'
  | 'translations___internal___owner'
  | 'translations___internal___type'
  | 'uri'
  | 'nodeType'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type WpTagGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpTagEdge>;
  nodes: Array<WpTag>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<WpTagGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type WpTagGroupConnectionDistinctArgs = {
  field: WpTagFieldsEnum;
};


export type WpTagGroupConnectionMaxArgs = {
  field: WpTagFieldsEnum;
};


export type WpTagGroupConnectionMinArgs = {
  field: WpTagFieldsEnum;
};


export type WpTagGroupConnectionSumArgs = {
  field: WpTagFieldsEnum;
};


export type WpTagGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: WpTagFieldsEnum;
};

export type WpTagSortInput = {
  fields?: InputMaybe<Array<InputMaybe<WpTagFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type WpUserRoleConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpUserRoleEdge>;
  nodes: Array<WpUserRole>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<WpUserRoleGroupConnection>;
};


export type WpUserRoleConnectionDistinctArgs = {
  field: WpUserRoleFieldsEnum;
};


export type WpUserRoleConnectionMaxArgs = {
  field: WpUserRoleFieldsEnum;
};


export type WpUserRoleConnectionMinArgs = {
  field: WpUserRoleFieldsEnum;
};


export type WpUserRoleConnectionSumArgs = {
  field: WpUserRoleFieldsEnum;
};


export type WpUserRoleConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: WpUserRoleFieldsEnum;
};

export type WpUserRoleEdge = {
  next?: Maybe<WpUserRole>;
  node: WpUserRole;
  previous?: Maybe<WpUserRole>;
};

export type WpUserRoleFieldsEnum =
  | 'capabilities'
  | 'displayName'
  | 'id'
  | 'name'
  | 'nodeType'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type WpUserRoleGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpUserRoleEdge>;
  nodes: Array<WpUserRole>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<WpUserRoleGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type WpUserRoleGroupConnectionDistinctArgs = {
  field: WpUserRoleFieldsEnum;
};


export type WpUserRoleGroupConnectionMaxArgs = {
  field: WpUserRoleFieldsEnum;
};


export type WpUserRoleGroupConnectionMinArgs = {
  field: WpUserRoleFieldsEnum;
};


export type WpUserRoleGroupConnectionSumArgs = {
  field: WpUserRoleFieldsEnum;
};


export type WpUserRoleGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: WpUserRoleFieldsEnum;
};

export type WpUserRoleSortInput = {
  fields?: InputMaybe<Array<InputMaybe<WpUserRoleFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type WpMenuLocationEnumQueryOperatorInput = {
  eq?: InputMaybe<WpMenuLocationEnum>;
  ne?: InputMaybe<WpMenuLocationEnum>;
  in?: InputMaybe<Array<InputMaybe<WpMenuLocationEnum>>>;
  nin?: InputMaybe<Array<InputMaybe<WpMenuLocationEnum>>>;
};

export type WpMenuToMenuItemConnectionFilterInput = {
  nodes?: InputMaybe<WpMenuItemFilterListInput>;
};

export type WpMenuItemFilterListInput = {
  elemMatch?: InputMaybe<WpMenuItemFilterInput>;
};

export type WpMenuItemFilterInput = {
  childItems?: InputMaybe<WpMenuItemToMenuItemConnectionFilterInput>;
  connectedNode?: InputMaybe<WpMenuItemToMenuItemLinkableConnectionEdgeFilterInput>;
  cssClasses?: InputMaybe<StringQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  label?: InputMaybe<StringQueryOperatorInput>;
  linkRelationship?: InputMaybe<StringQueryOperatorInput>;
  locations?: InputMaybe<WpMenuLocationEnumQueryOperatorInput>;
  menu?: InputMaybe<WpMenuItemToMenuConnectionEdgeFilterInput>;
  order?: InputMaybe<IntQueryOperatorInput>;
  parentDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  parentId?: InputMaybe<IdQueryOperatorInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  target?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type WpMenuItemToMenuItemConnectionFilterInput = {
  nodes?: InputMaybe<WpMenuItemFilterListInput>;
};

export type WpMenuItemToMenuItemLinkableConnectionEdgeFilterInput = {
  node?: InputMaybe<WpMenuItemLinkableFilterInput>;
};

export type WpMenuItemLinkableFilterInput = {
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<IdQueryOperatorInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
};

export type WpMenuItemToMenuConnectionEdgeFilterInput = {
  node?: InputMaybe<WpMenuFilterInput>;
};

export type WpMenuFilterInput = {
  count?: InputMaybe<IntQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  locations?: InputMaybe<WpMenuLocationEnumQueryOperatorInput>;
  menuItems?: InputMaybe<WpMenuToMenuItemConnectionFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type WpMenuConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpMenuEdge>;
  nodes: Array<WpMenu>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<WpMenuGroupConnection>;
};


export type WpMenuConnectionDistinctArgs = {
  field: WpMenuFieldsEnum;
};


export type WpMenuConnectionMaxArgs = {
  field: WpMenuFieldsEnum;
};


export type WpMenuConnectionMinArgs = {
  field: WpMenuFieldsEnum;
};


export type WpMenuConnectionSumArgs = {
  field: WpMenuFieldsEnum;
};


export type WpMenuConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: WpMenuFieldsEnum;
};

export type WpMenuEdge = {
  next?: Maybe<WpMenu>;
  node: WpMenu;
  previous?: Maybe<WpMenu>;
};

export type WpMenuFieldsEnum =
  | 'count'
  | 'databaseId'
  | 'id'
  | 'locations'
  | 'menuItems___nodes'
  | 'menuItems___nodes___childItems___nodes'
  | 'menuItems___nodes___cssClasses'
  | 'menuItems___nodes___databaseId'
  | 'menuItems___nodes___description'
  | 'menuItems___nodes___id'
  | 'menuItems___nodes___label'
  | 'menuItems___nodes___linkRelationship'
  | 'menuItems___nodes___locations'
  | 'menuItems___nodes___order'
  | 'menuItems___nodes___parentDatabaseId'
  | 'menuItems___nodes___parentId'
  | 'menuItems___nodes___path'
  | 'menuItems___nodes___target'
  | 'menuItems___nodes___title'
  | 'menuItems___nodes___url'
  | 'menuItems___nodes___nodeType'
  | 'menuItems___nodes___parent___id'
  | 'menuItems___nodes___parent___children'
  | 'menuItems___nodes___children'
  | 'menuItems___nodes___children___id'
  | 'menuItems___nodes___children___children'
  | 'menuItems___nodes___internal___content'
  | 'menuItems___nodes___internal___contentDigest'
  | 'menuItems___nodes___internal___description'
  | 'menuItems___nodes___internal___fieldOwners'
  | 'menuItems___nodes___internal___ignoreType'
  | 'menuItems___nodes___internal___mediaType'
  | 'menuItems___nodes___internal___owner'
  | 'menuItems___nodes___internal___type'
  | 'name'
  | 'slug'
  | 'nodeType'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type WpMenuGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpMenuEdge>;
  nodes: Array<WpMenu>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<WpMenuGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type WpMenuGroupConnectionDistinctArgs = {
  field: WpMenuFieldsEnum;
};


export type WpMenuGroupConnectionMaxArgs = {
  field: WpMenuFieldsEnum;
};


export type WpMenuGroupConnectionMinArgs = {
  field: WpMenuFieldsEnum;
};


export type WpMenuGroupConnectionSumArgs = {
  field: WpMenuFieldsEnum;
};


export type WpMenuGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: WpMenuFieldsEnum;
};

export type WpMenuSortInput = {
  fields?: InputMaybe<Array<InputMaybe<WpMenuFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type WpMenuItemConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpMenuItemEdge>;
  nodes: Array<WpMenuItem>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<WpMenuItemGroupConnection>;
};


export type WpMenuItemConnectionDistinctArgs = {
  field: WpMenuItemFieldsEnum;
};


export type WpMenuItemConnectionMaxArgs = {
  field: WpMenuItemFieldsEnum;
};


export type WpMenuItemConnectionMinArgs = {
  field: WpMenuItemFieldsEnum;
};


export type WpMenuItemConnectionSumArgs = {
  field: WpMenuItemFieldsEnum;
};


export type WpMenuItemConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: WpMenuItemFieldsEnum;
};

export type WpMenuItemEdge = {
  next?: Maybe<WpMenuItem>;
  node: WpMenuItem;
  previous?: Maybe<WpMenuItem>;
};

export type WpMenuItemFieldsEnum =
  | 'childItems___nodes'
  | 'childItems___nodes___childItems___nodes'
  | 'childItems___nodes___cssClasses'
  | 'childItems___nodes___databaseId'
  | 'childItems___nodes___description'
  | 'childItems___nodes___id'
  | 'childItems___nodes___label'
  | 'childItems___nodes___linkRelationship'
  | 'childItems___nodes___locations'
  | 'childItems___nodes___order'
  | 'childItems___nodes___parentDatabaseId'
  | 'childItems___nodes___parentId'
  | 'childItems___nodes___path'
  | 'childItems___nodes___target'
  | 'childItems___nodes___title'
  | 'childItems___nodes___url'
  | 'childItems___nodes___nodeType'
  | 'childItems___nodes___parent___id'
  | 'childItems___nodes___parent___children'
  | 'childItems___nodes___children'
  | 'childItems___nodes___children___id'
  | 'childItems___nodes___children___children'
  | 'childItems___nodes___internal___content'
  | 'childItems___nodes___internal___contentDigest'
  | 'childItems___nodes___internal___description'
  | 'childItems___nodes___internal___fieldOwners'
  | 'childItems___nodes___internal___ignoreType'
  | 'childItems___nodes___internal___mediaType'
  | 'childItems___nodes___internal___owner'
  | 'childItems___nodes___internal___type'
  | 'connectedNode___node___databaseId'
  | 'connectedNode___node___id'
  | 'connectedNode___node___uri'
  | 'cssClasses'
  | 'databaseId'
  | 'description'
  | 'id'
  | 'label'
  | 'linkRelationship'
  | 'locations'
  | 'menu___node___count'
  | 'menu___node___databaseId'
  | 'menu___node___id'
  | 'menu___node___locations'
  | 'menu___node___menuItems___nodes'
  | 'menu___node___name'
  | 'menu___node___slug'
  | 'menu___node___nodeType'
  | 'menu___node___parent___id'
  | 'menu___node___parent___children'
  | 'menu___node___children'
  | 'menu___node___children___id'
  | 'menu___node___children___children'
  | 'menu___node___internal___content'
  | 'menu___node___internal___contentDigest'
  | 'menu___node___internal___description'
  | 'menu___node___internal___fieldOwners'
  | 'menu___node___internal___ignoreType'
  | 'menu___node___internal___mediaType'
  | 'menu___node___internal___owner'
  | 'menu___node___internal___type'
  | 'order'
  | 'parentDatabaseId'
  | 'parentId'
  | 'path'
  | 'target'
  | 'title'
  | 'url'
  | 'nodeType'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type WpMenuItemGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpMenuItemEdge>;
  nodes: Array<WpMenuItem>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<WpMenuItemGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type WpMenuItemGroupConnectionDistinctArgs = {
  field: WpMenuItemFieldsEnum;
};


export type WpMenuItemGroupConnectionMaxArgs = {
  field: WpMenuItemFieldsEnum;
};


export type WpMenuItemGroupConnectionMinArgs = {
  field: WpMenuItemFieldsEnum;
};


export type WpMenuItemGroupConnectionSumArgs = {
  field: WpMenuItemFieldsEnum;
};


export type WpMenuItemGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: WpMenuItemFieldsEnum;
};

export type WpMenuItemSortInput = {
  fields?: InputMaybe<Array<InputMaybe<WpMenuItemFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type WpCommentAuthorConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpCommentAuthorEdge>;
  nodes: Array<WpCommentAuthor>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<WpCommentAuthorGroupConnection>;
};


export type WpCommentAuthorConnectionDistinctArgs = {
  field: WpCommentAuthorFieldsEnum;
};


export type WpCommentAuthorConnectionMaxArgs = {
  field: WpCommentAuthorFieldsEnum;
};


export type WpCommentAuthorConnectionMinArgs = {
  field: WpCommentAuthorFieldsEnum;
};


export type WpCommentAuthorConnectionSumArgs = {
  field: WpCommentAuthorFieldsEnum;
};


export type WpCommentAuthorConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: WpCommentAuthorFieldsEnum;
};

export type WpCommentAuthorEdge = {
  next?: Maybe<WpCommentAuthor>;
  node: WpCommentAuthor;
  previous?: Maybe<WpCommentAuthor>;
};

export type WpCommentAuthorFieldsEnum =
  | 'databaseId'
  | 'email'
  | 'id'
  | 'name'
  | 'url'
  | 'nodeType'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type WpCommentAuthorGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpCommentAuthorEdge>;
  nodes: Array<WpCommentAuthor>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<WpCommentAuthorGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type WpCommentAuthorGroupConnectionDistinctArgs = {
  field: WpCommentAuthorFieldsEnum;
};


export type WpCommentAuthorGroupConnectionMaxArgs = {
  field: WpCommentAuthorFieldsEnum;
};


export type WpCommentAuthorGroupConnectionMinArgs = {
  field: WpCommentAuthorFieldsEnum;
};


export type WpCommentAuthorGroupConnectionSumArgs = {
  field: WpCommentAuthorFieldsEnum;
};


export type WpCommentAuthorGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: WpCommentAuthorFieldsEnum;
};

export type WpCommentAuthorFilterInput = {
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  email?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type WpCommentAuthorSortInput = {
  fields?: InputMaybe<Array<InputMaybe<WpCommentAuthorFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type WpSettingsFilterInput = {
  discussionSettingsDefaultCommentStatus?: InputMaybe<StringQueryOperatorInput>;
  discussionSettingsDefaultPingStatus?: InputMaybe<StringQueryOperatorInput>;
  generalSettingsDateFormat?: InputMaybe<StringQueryOperatorInput>;
  generalSettingsDescription?: InputMaybe<StringQueryOperatorInput>;
  generalSettingsEmail?: InputMaybe<StringQueryOperatorInput>;
  generalSettingsLanguage?: InputMaybe<StringQueryOperatorInput>;
  generalSettingsStartOfWeek?: InputMaybe<IntQueryOperatorInput>;
  generalSettingsTimeFormat?: InputMaybe<StringQueryOperatorInput>;
  generalSettingsTimezone?: InputMaybe<StringQueryOperatorInput>;
  generalSettingsTitle?: InputMaybe<StringQueryOperatorInput>;
  generalSettingsUrl?: InputMaybe<StringQueryOperatorInput>;
  readingSettingsPostsPerPage?: InputMaybe<IntQueryOperatorInput>;
  writingSettingsDefaultCategory?: InputMaybe<IntQueryOperatorInput>;
  writingSettingsDefaultPostFormat?: InputMaybe<StringQueryOperatorInput>;
  writingSettingsUseSmilies?: InputMaybe<BooleanQueryOperatorInput>;
};

export type WpDiscussionSettingsFilterInput = {
  defaultCommentStatus?: InputMaybe<StringQueryOperatorInput>;
  defaultPingStatus?: InputMaybe<StringQueryOperatorInput>;
};

export type WpGeneralSettingsFilterInput = {
  dateFormat?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  email?: InputMaybe<StringQueryOperatorInput>;
  language?: InputMaybe<StringQueryOperatorInput>;
  startOfWeek?: InputMaybe<IntQueryOperatorInput>;
  timeFormat?: InputMaybe<StringQueryOperatorInput>;
  timezone?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};

export type WpLanguageFilterListInput = {
  elemMatch?: InputMaybe<WpLanguageFilterInput>;
};

export type WpReadingSettingsFilterInput = {
  postsPerPage?: InputMaybe<IntQueryOperatorInput>;
};

export type WpWpGatsbyFilterInput = {
  arePrettyPermalinksEnabled?: InputMaybe<BooleanQueryOperatorInput>;
  isPreviewFrontendOnline?: InputMaybe<BooleanQueryOperatorInput>;
};

export type WpWritingSettingsFilterInput = {
  defaultCategory?: InputMaybe<IntQueryOperatorInput>;
  defaultPostFormat?: InputMaybe<StringQueryOperatorInput>;
  useSmilies?: InputMaybe<BooleanQueryOperatorInput>;
};

export type WpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpEdge>;
  nodes: Array<Wp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<WpGroupConnection>;
};


export type WpConnectionDistinctArgs = {
  field: WpFieldsEnum;
};


export type WpConnectionMaxArgs = {
  field: WpFieldsEnum;
};


export type WpConnectionMinArgs = {
  field: WpFieldsEnum;
};


export type WpConnectionSumArgs = {
  field: WpFieldsEnum;
};


export type WpConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: WpFieldsEnum;
};

export type WpEdge = {
  next?: Maybe<Wp>;
  node: Wp;
  previous?: Maybe<Wp>;
};

export type WpFieldsEnum =
  | 'allSettings___discussionSettingsDefaultCommentStatus'
  | 'allSettings___discussionSettingsDefaultPingStatus'
  | 'allSettings___generalSettingsDateFormat'
  | 'allSettings___generalSettingsDescription'
  | 'allSettings___generalSettingsEmail'
  | 'allSettings___generalSettingsLanguage'
  | 'allSettings___generalSettingsStartOfWeek'
  | 'allSettings___generalSettingsTimeFormat'
  | 'allSettings___generalSettingsTimezone'
  | 'allSettings___generalSettingsTitle'
  | 'allSettings___generalSettingsUrl'
  | 'allSettings___readingSettingsPostsPerPage'
  | 'allSettings___writingSettingsDefaultCategory'
  | 'allSettings___writingSettingsDefaultPostFormat'
  | 'allSettings___writingSettingsUseSmilies'
  | 'defaultLanguage___code'
  | 'defaultLanguage___homeUrl'
  | 'defaultLanguage___id'
  | 'defaultLanguage___locale'
  | 'defaultLanguage___name'
  | 'defaultLanguage___slug'
  | 'discussionSettings___defaultCommentStatus'
  | 'discussionSettings___defaultPingStatus'
  | 'generalSettings___dateFormat'
  | 'generalSettings___description'
  | 'generalSettings___email'
  | 'generalSettings___language'
  | 'generalSettings___startOfWeek'
  | 'generalSettings___timeFormat'
  | 'generalSettings___timezone'
  | 'generalSettings___title'
  | 'generalSettings___url'
  | 'languages'
  | 'languages___code'
  | 'languages___homeUrl'
  | 'languages___id'
  | 'languages___locale'
  | 'languages___name'
  | 'languages___slug'
  | 'readingSettings___postsPerPage'
  | 'wpGatsby___arePrettyPermalinksEnabled'
  | 'wpGatsby___isPreviewFrontendOnline'
  | 'writingSettings___defaultCategory'
  | 'writingSettings___defaultPostFormat'
  | 'writingSettings___useSmilies'
  | 'nodeType'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type WpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WpEdge>;
  nodes: Array<Wp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<WpGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type WpGroupConnectionDistinctArgs = {
  field: WpFieldsEnum;
};


export type WpGroupConnectionMaxArgs = {
  field: WpFieldsEnum;
};


export type WpGroupConnectionMinArgs = {
  field: WpFieldsEnum;
};


export type WpGroupConnectionSumArgs = {
  field: WpFieldsEnum;
};


export type WpGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: WpFieldsEnum;
};

export type WpFilterInput = {
  allSettings?: InputMaybe<WpSettingsFilterInput>;
  defaultLanguage?: InputMaybe<WpLanguageFilterInput>;
  discussionSettings?: InputMaybe<WpDiscussionSettingsFilterInput>;
  generalSettings?: InputMaybe<WpGeneralSettingsFilterInput>;
  languages?: InputMaybe<WpLanguageFilterListInput>;
  readingSettings?: InputMaybe<WpReadingSettingsFilterInput>;
  wpGatsby?: InputMaybe<WpWpGatsbyFilterInput>;
  writingSettings?: InputMaybe<WpWritingSettingsFilterInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type WpSortInput = {
  fields?: InputMaybe<Array<InputMaybe<WpFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SeoQueryVariables = Exact<{ [key: string]: never; }>;


export type SeoQuery = { site?: { siteMetadata?: { defaultTitle?: string | null, defaultDescription?: string | null, siteUrl?: string | null, defaultImage?: string | null } | null } | null };

export type BlogPostByIdQueryVariables = Exact<{
  id: Scalars['String'];
  previousPostId?: InputMaybe<Scalars['String']>;
  nextPostId?: InputMaybe<Scalars['String']>;
}>;


export type BlogPostByIdQuery = { post?: { id: string, excerpt?: string | null, content?: string | null, title?: string | null, date?: any | null, featuredImage?: { node?: { altText?: string | null, localFile?: { childImageSharp?: { gatsbyImageData: any } | null } | null } | null } | null, realization?: { title?: string | null, text?: string | null } | null } | null, previous?: { uri?: string | null, title?: string | null } | null, next?: { uri?: string | null, title?: string | null } | null };
