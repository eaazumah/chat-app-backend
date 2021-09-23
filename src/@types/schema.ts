export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Date custom scalar type */
  Date: any;
  /** PhoneNumber custom scalar type */
  PhoneNumber: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Channel = {
  __typename?: 'Channel';
  createdAt: Scalars['Date'];
  deletedAt?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  owner?: Maybe<User>;
  ownerId: Scalars['ID'];
  updatedAt: Scalars['Date'];
};

export type ChannelsConnection = {
  __typename?: 'ChannelsConnection';
  edges: Array<Channel>;
  pageInfo: PageInfo;
};

export type Message = {
  __typename?: 'Message';
  channel?: Maybe<Channel>;
  channelId: Scalars['ID'];
  createdAt: Scalars['Date'];
  deletedAt?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  sender?: Maybe<User>;
  senderId: Scalars['ID'];
  text: Scalars['String'];
  updatedAt: Scalars['Date'];
};

export type MessagesConnection = {
  __typename?: 'MessagesConnection';
  edges: Array<Message>;
  pageInfo: PageInfo;
};

export type Mutation = {
  __typename?: 'Mutation';
  _empty?: Maybe<Scalars['String']>;
  createChannel: Channel;
  createMessage: Message;
  createUser: User;
};


export type MutationCreateChannelArgs = {
  data: MutationCreateChannelData;
};


export type MutationCreateMessageArgs = {
  data: MutationCreateMessageData;
};


export type MutationCreateUserArgs = {
  data: MutationCreateUserData;
};

export type MutationCreateChannelData = {
  id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  phone: Scalars['String'];
};

export type MutationCreateMessageData = {
  channelId: Scalars['ID'];
  id?: Maybe<Scalars['ID']>;
  senderId: Scalars['ID'];
  text: Scalars['String'];
};

export type MutationCreateUserData = {
  id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  phone: Scalars['String'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  total: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  _empty?: Maybe<Scalars['String']>;
  channels: ChannelsConnection;
  hello?: Maybe<Scalars['String']>;
  messages: MessagesConnection;
  users: UsersConnection;
};


export type QueryChannelsArgs = {
  filters: QueryChannelsFilters;
};


export type QueryMessagesArgs = {
  filters: QueryMessagesFilters;
};


export type QueryUsersArgs = {
  filters: QueryUsersFilters;
};

export type QueryChannelsFilters = {
  deleted?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Scalars['ID']>>;
  limit?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
  ownerId?: Maybe<Scalars['ID']>;
};

export type QueryMessagesFilters = {
  channelId?: Maybe<Scalars['ID']>;
  deleted?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  senderId?: Maybe<Scalars['ID']>;
  text?: Maybe<Scalars['String']>;
};

export type QueryUsersFilters = {
  deleted?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Scalars['ID']>>;
  limit?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['PhoneNumber']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  _empty?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['Date'];
  deletedAt?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  phone: Scalars['PhoneNumber'];
  updatedAt: Scalars['Date'];
};

export type UsersConnection = {
  __typename?: 'UsersConnection';
  edges: Array<User>;
  pageInfo: PageInfo;
};
