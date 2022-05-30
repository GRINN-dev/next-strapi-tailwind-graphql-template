import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type BlogArticle = {
  __typename?: 'BlogArticle';
  articleAuthor?: Maybe<Scalars['String']>;
  articleContent?: Maybe<Scalars['String']>;
  articleTitle?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  keyWord?: Maybe<Scalars['String']>;
  meta?: Maybe<ComponentMetaMeta>;
  ogTag?: Maybe<Scalars['String']>;
  pageDescription?: Maybe<Scalars['String']>;
  pageTitle?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishingDate?: Maybe<Scalars['Date']>;
  slug?: Maybe<Scalars['String']>;
  team_member?: Maybe<TeamMemberEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type BlogArticleEntity = {
  __typename?: 'BlogArticleEntity';
  attributes?: Maybe<BlogArticle>;
  id?: Maybe<Scalars['ID']>;
};

export type BlogArticleEntityResponse = {
  __typename?: 'BlogArticleEntityResponse';
  data?: Maybe<BlogArticleEntity>;
};

export type BlogArticleEntityResponseCollection = {
  __typename?: 'BlogArticleEntityResponseCollection';
  data: Array<BlogArticleEntity>;
  meta: ResponseCollectionMeta;
};

export type BlogArticleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<BlogArticleFiltersInput>>>;
  articleAuthor?: InputMaybe<StringFilterInput>;
  articleContent?: InputMaybe<StringFilterInput>;
  articleTitle?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  keyWord?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<BlogArticleFiltersInput>;
  ogTag?: InputMaybe<StringFilterInput>;
  or?: InputMaybe<Array<InputMaybe<BlogArticleFiltersInput>>>;
  pageDescription?: InputMaybe<StringFilterInput>;
  pageTitle?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  publishingDate?: InputMaybe<DateFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  team_member?: InputMaybe<TeamMemberFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type BlogArticleInput = {
  articleAuthor?: InputMaybe<Scalars['String']>;
  articleContent?: InputMaybe<Scalars['String']>;
  articleTitle?: InputMaybe<Scalars['String']>;
  keyWord?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<ComponentMetaMetaInput>;
  ogTag?: InputMaybe<Scalars['String']>;
  pageDescription?: InputMaybe<Scalars['String']>;
  pageTitle?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  publishingDate?: InputMaybe<Scalars['Date']>;
  slug?: InputMaybe<Scalars['String']>;
  team_member?: InputMaybe<Scalars['ID']>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  contains?: InputMaybe<Scalars['Boolean']>;
  containsi?: InputMaybe<Scalars['Boolean']>;
  endsWith?: InputMaybe<Scalars['Boolean']>;
  eq?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']>;
  notContainsi?: InputMaybe<Scalars['Boolean']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']>;
};

export type ComponentLayoutFooterNavigation = {
  __typename?: 'ComponentLayoutFooterNavigation';
  href?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  subNavigation?: Maybe<Array<Maybe<ComponentLayoutSubFooterNavigation>>>;
  title?: Maybe<Scalars['String']>;
};


export type ComponentLayoutFooterNavigationSubNavigationArgs = {
  filters?: InputMaybe<ComponentLayoutSubFooterNavigationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentLayoutFooterNavigationFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentLayoutFooterNavigationFiltersInput>>>;
  href?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentLayoutFooterNavigationFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentLayoutFooterNavigationFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentLayoutFooterNavigationInput = {
  href?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  subNavigation?: InputMaybe<Array<InputMaybe<ComponentLayoutSubFooterNavigationInput>>>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentLayoutSocials = {
  __typename?: 'ComponentLayoutSocials';
  href?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  type?: Maybe<Enum_Componentlayoutsocials_Type>;
};

export type ComponentLayoutSocialsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentLayoutSocialsFiltersInput>>>;
  href?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentLayoutSocialsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentLayoutSocialsFiltersInput>>>;
  type?: InputMaybe<StringFilterInput>;
};

export type ComponentLayoutSocialsInput = {
  href?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  type?: InputMaybe<Enum_Componentlayoutsocials_Type>;
};

export type ComponentLayoutSubFooterNavigation = {
  __typename?: 'ComponentLayoutSubFooterNavigation';
  href?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
};

export type ComponentLayoutSubFooterNavigationFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentLayoutSubFooterNavigationFiltersInput>>>;
  href?: InputMaybe<StringFilterInput>;
  label?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentLayoutSubFooterNavigationFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentLayoutSubFooterNavigationFiltersInput>>>;
};

export type ComponentLayoutSubFooterNavigationInput = {
  href?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  label?: InputMaybe<Scalars['String']>;
};

export type ComponentMetaMeta = {
  __typename?: 'ComponentMetaMeta';
  id: Scalars['ID'];
  metaContent?: Maybe<Scalars['String']>;
  metaName?: Maybe<Scalars['String']>;
  metaProperty?: Maybe<Scalars['String']>;
};

export type ComponentMetaMetaInput = {
  id?: InputMaybe<Scalars['ID']>;
  metaContent?: InputMaybe<Scalars['String']>;
  metaName?: InputMaybe<Scalars['String']>;
  metaProperty?: InputMaybe<Scalars['String']>;
};

export type ComponentSocialNetworkFacebook = {
  __typename?: 'ComponentSocialNetworkFacebook';
  id: Scalars['ID'];
  link?: Maybe<Scalars['String']>;
  socialNetworkName?: Maybe<Scalars['String']>;
};

export type ComponentSocialNetworkFacebookFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSocialNetworkFacebookFiltersInput>>>;
  link?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSocialNetworkFacebookFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSocialNetworkFacebookFiltersInput>>>;
  socialNetworkName?: InputMaybe<StringFilterInput>;
};

export type ComponentSocialNetworkFacebookInput = {
  id?: InputMaybe<Scalars['ID']>;
  link?: InputMaybe<Scalars['String']>;
  socialNetworkName?: InputMaybe<Scalars['String']>;
};

export type DateFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  contains?: InputMaybe<Scalars['Date']>;
  containsi?: InputMaybe<Scalars['Date']>;
  endsWith?: InputMaybe<Scalars['Date']>;
  eq?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  not?: InputMaybe<DateFilterInput>;
  notContains?: InputMaybe<Scalars['Date']>;
  notContainsi?: InputMaybe<Scalars['Date']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  startsWith?: InputMaybe<Scalars['Date']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  contains?: InputMaybe<Scalars['DateTime']>;
  containsi?: InputMaybe<Scalars['DateTime']>;
  endsWith?: InputMaybe<Scalars['DateTime']>;
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  ne?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']>;
  notContainsi?: InputMaybe<Scalars['DateTime']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']>;
};

export enum Enum_Componentlayoutsocials_Type {
  Dribbble = 'Dribbble',
  Facebook = 'Facebook',
  GitHub = 'GitHub',
  Instagram = 'Instagram',
  Twitter = 'Twitter'
}

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  contains?: InputMaybe<Scalars['Float']>;
  containsi?: InputMaybe<Scalars['Float']>;
  endsWith?: InputMaybe<Scalars['Float']>;
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']>;
  notContainsi?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  startsWith?: InputMaybe<Scalars['Float']>;
};

export type GenericMorph = BlogArticle | ComponentLayoutFooterNavigation | ComponentLayoutSocials | ComponentLayoutSubFooterNavigation | ComponentMetaMeta | ComponentSocialNetworkFacebook | I18NLocale | Layout | TeamMember | UploadFile | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  containsi?: InputMaybe<Scalars['ID']>;
  endsWith?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']>;
  notContainsi?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  startsWith?: InputMaybe<Scalars['ID']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contains?: InputMaybe<Scalars['Int']>;
  containsi?: InputMaybe<Scalars['Int']>;
  endsWith?: InputMaybe<Scalars['Int']>;
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']>;
  notContainsi?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  startsWith?: InputMaybe<Scalars['Int']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  contains?: InputMaybe<Scalars['JSON']>;
  containsi?: InputMaybe<Scalars['JSON']>;
  endsWith?: InputMaybe<Scalars['JSON']>;
  eq?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']>;
  notContainsi?: InputMaybe<Scalars['JSON']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  startsWith?: InputMaybe<Scalars['JSON']>;
};

export type Layout = {
  __typename?: 'Layout';
  createdAt?: Maybe<Scalars['DateTime']>;
  footerNavigation?: Maybe<Array<Maybe<ComponentLayoutFooterNavigation>>>;
  headerMainNavigation?: Maybe<Array<Maybe<ComponentLayoutSubFooterNavigation>>>;
  headerSecondaryNavigation?: Maybe<Array<Maybe<ComponentLayoutFooterNavigation>>>;
  headerSecondaryNavigationTitle?: Maybe<Scalars['String']>;
  isDisplayed?: Maybe<Scalars['Boolean']>;
  logo?: Maybe<UploadFileEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  socials?: Maybe<Array<Maybe<ComponentLayoutSocials>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type LayoutFooterNavigationArgs = {
  filters?: InputMaybe<ComponentLayoutFooterNavigationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type LayoutHeaderMainNavigationArgs = {
  filters?: InputMaybe<ComponentLayoutSubFooterNavigationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type LayoutHeaderSecondaryNavigationArgs = {
  filters?: InputMaybe<ComponentLayoutFooterNavigationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type LayoutSocialsArgs = {
  filters?: InputMaybe<ComponentLayoutSocialsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type LayoutEntity = {
  __typename?: 'LayoutEntity';
  attributes?: Maybe<Layout>;
  id?: Maybe<Scalars['ID']>;
};

export type LayoutEntityResponse = {
  __typename?: 'LayoutEntityResponse';
  data?: Maybe<LayoutEntity>;
};

export type LayoutInput = {
  footerNavigation?: InputMaybe<Array<InputMaybe<ComponentLayoutFooterNavigationInput>>>;
  headerMainNavigation?: InputMaybe<Array<InputMaybe<ComponentLayoutSubFooterNavigationInput>>>;
  headerSecondaryNavigation?: InputMaybe<Array<InputMaybe<ComponentLayoutFooterNavigationInput>>>;
  headerSecondaryNavigationTitle?: InputMaybe<Scalars['String']>;
  isDisplayed?: InputMaybe<Scalars['Boolean']>;
  logo?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  socials?: InputMaybe<Array<InputMaybe<ComponentLayoutSocialsInput>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createBlogArticle?: Maybe<BlogArticleEntityResponse>;
  createTeamMember?: Maybe<TeamMemberEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteBlogArticle?: Maybe<BlogArticleEntityResponse>;
  deleteLayout?: Maybe<LayoutEntityResponse>;
  deleteTeamMember?: Maybe<TeamMemberEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Update an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateBlogArticle?: Maybe<BlogArticleEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateLayout?: Maybe<LayoutEntityResponse>;
  updateTeamMember?: Maybe<TeamMemberEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationCreateBlogArticleArgs = {
  data: BlogArticleInput;
};


export type MutationCreateTeamMemberArgs = {
  data: TeamMemberInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteBlogArticleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteTeamMemberArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateBlogArticleArgs = {
  data: BlogArticleInput;
  id: Scalars['ID'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateLayoutArgs = {
  data: LayoutInput;
};


export type MutationUpdateTeamMemberArgs = {
  data: TeamMemberInput;
  id: Scalars['ID'];
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int'];
  pageCount: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  blogArticle?: Maybe<BlogArticleEntityResponse>;
  blogArticles?: Maybe<BlogArticleEntityResponseCollection>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  layout?: Maybe<LayoutEntityResponse>;
  me?: Maybe<UsersPermissionsMe>;
  teamMember?: Maybe<TeamMemberEntityResponse>;
  teamMembers?: Maybe<TeamMemberEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryBlogArticleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryBlogArticlesArgs = {
  filters?: InputMaybe<BlogArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryLayoutArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryTeamMemberArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTeamMembersArgs = {
  filters?: InputMaybe<TeamMemberFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  containsi?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']>;
  notContainsi?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type TeamMember = {
  __typename?: 'TeamMember';
  Facebook?: Maybe<Array<Maybe<ComponentSocialNetworkFacebook>>>;
  Instagram?: Maybe<Array<Maybe<ComponentSocialNetworkFacebook>>>;
  LinkedIn?: Maybe<Array<Maybe<ComponentSocialNetworkFacebook>>>;
  Snapchat?: Maybe<Array<Maybe<ComponentSocialNetworkFacebook>>>;
  TikTok?: Maybe<Array<Maybe<ComponentSocialNetworkFacebook>>>;
  Twitter?: Maybe<Array<Maybe<ComponentSocialNetworkFacebook>>>;
  avatar?: Maybe<UploadFileRelationResponseCollection>;
  bio?: Maybe<Scalars['String']>;
  blog_article?: Maybe<BlogArticleEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type TeamMemberFacebookArgs = {
  filters?: InputMaybe<ComponentSocialNetworkFacebookFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type TeamMemberInstagramArgs = {
  filters?: InputMaybe<ComponentSocialNetworkFacebookFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type TeamMemberLinkedInArgs = {
  filters?: InputMaybe<ComponentSocialNetworkFacebookFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type TeamMemberSnapchatArgs = {
  filters?: InputMaybe<ComponentSocialNetworkFacebookFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type TeamMemberTikTokArgs = {
  filters?: InputMaybe<ComponentSocialNetworkFacebookFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type TeamMemberTwitterArgs = {
  filters?: InputMaybe<ComponentSocialNetworkFacebookFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type TeamMemberAvatarArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TeamMemberEntity = {
  __typename?: 'TeamMemberEntity';
  attributes?: Maybe<TeamMember>;
  id?: Maybe<Scalars['ID']>;
};

export type TeamMemberEntityResponse = {
  __typename?: 'TeamMemberEntityResponse';
  data?: Maybe<TeamMemberEntity>;
};

export type TeamMemberEntityResponseCollection = {
  __typename?: 'TeamMemberEntityResponseCollection';
  data: Array<TeamMemberEntity>;
  meta: ResponseCollectionMeta;
};

export type TeamMemberFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TeamMemberFiltersInput>>>;
  bio?: InputMaybe<StringFilterInput>;
  blog_article?: InputMaybe<BlogArticleFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  firstName?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  lastName?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<TeamMemberFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TeamMemberFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TeamMemberInput = {
  Facebook?: InputMaybe<Array<InputMaybe<ComponentSocialNetworkFacebookInput>>>;
  Instagram?: InputMaybe<Array<InputMaybe<ComponentSocialNetworkFacebookInput>>>;
  LinkedIn?: InputMaybe<Array<InputMaybe<ComponentSocialNetworkFacebookInput>>>;
  Snapchat?: InputMaybe<Array<InputMaybe<ComponentSocialNetworkFacebookInput>>>;
  TikTok?: InputMaybe<Array<InputMaybe<ComponentSocialNetworkFacebookInput>>>;
  Twitter?: InputMaybe<Array<InputMaybe<ComponentSocialNetworkFacebookInput>>>;
  avatar?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  bio?: InputMaybe<Scalars['String']>;
  blog_article?: InputMaybe<Scalars['ID']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  ext?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  size?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Scalars['String'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type GetLayoutQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLayoutQuery = { __typename?: 'Query', layout?: { __typename?: 'LayoutEntityResponse', data?: { __typename?: 'LayoutEntity', id?: string | null, attributes?: { __typename?: 'Layout', headerSecondaryNavigationTitle?: string | null, isDisplayed?: boolean | null, logo?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', name: string, url: string } | null } | null } | null, headerMainNavigation?: Array<{ __typename?: 'ComponentLayoutSubFooterNavigation', id: string, label?: string | null, href?: string | null } | null> | null, footerNavigation?: Array<{ __typename?: 'ComponentLayoutFooterNavigation', id: string, title?: string | null, subNavigation?: Array<{ __typename?: 'ComponentLayoutSubFooterNavigation', id: string, label?: string | null, href?: string | null } | null> | null } | null> | null, socials?: Array<{ __typename?: 'ComponentLayoutSocials', id: string, href?: string | null, type?: Enum_Componentlayoutsocials_Type | null } | null> | null, headerSecondaryNavigation?: Array<{ __typename?: 'ComponentLayoutFooterNavigation', id: string, title?: string | null, href?: string | null, subNavigation?: Array<{ __typename?: 'ComponentLayoutSubFooterNavigation', id: string, label?: string | null, href?: string | null } | null> | null } | null> | null } | null } | null } | null };


export const GetLayoutDocument = gql`
    query GetLayout {
  layout {
    data {
      id
      attributes {
        logo {
          data {
            id
            attributes {
              name
              url
            }
          }
        }
        headerMainNavigation {
          id
          label
          href
        }
        footerNavigation {
          id
          title
          subNavigation {
            id
            label
            href
          }
        }
        socials {
          id
          href
          type
        }
        headerSecondaryNavigationTitle
        isDisplayed
        headerSecondaryNavigation {
          id
          title
          href
          subNavigation {
            id
            label
            href
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetLayoutQuery__
 *
 * To run a query within a React component, call `useGetLayoutQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLayoutQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLayoutQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetLayoutQuery(baseOptions?: Apollo.QueryHookOptions<GetLayoutQuery, GetLayoutQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLayoutQuery, GetLayoutQueryVariables>(GetLayoutDocument, options);
      }
export function useGetLayoutLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLayoutQuery, GetLayoutQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLayoutQuery, GetLayoutQueryVariables>(GetLayoutDocument, options);
        }
export type GetLayoutQueryHookResult = ReturnType<typeof useGetLayoutQuery>;
export type GetLayoutLazyQueryHookResult = ReturnType<typeof useGetLayoutLazyQuery>;
export type GetLayoutQueryResult = Apollo.QueryResult<GetLayoutQuery, GetLayoutQueryVariables>;