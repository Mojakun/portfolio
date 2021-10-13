import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: Maybe<Scalars['bigint']>;
  _gt?: Maybe<Scalars['bigint']>;
  _gte?: Maybe<Scalars['bigint']>;
  _in?: Maybe<Array<Scalars['bigint']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['bigint']>;
  _lte?: Maybe<Scalars['bigint']>;
  _neq?: Maybe<Scalars['bigint']>;
  _nin?: Maybe<Array<Scalars['bigint']>>;
};

/** columns and relationships of "d_users" */
export type D_Users = {
  __typename?: 'd_users';
  content?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  deleted_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  mail: Scalars['String'];
  name: Scalars['String'];
  original_id: Scalars['String'];
  password: Scalars['String'];
  updated_at?: Maybe<Scalars['timestamptz']>;
  /** fetch data from the table: "users_sns" */
  users_sns: Array<Users_Sns>;
  /** An aggregate relationship */
  users_sns_aggregate: Users_Sns_Aggregate;
};


/** columns and relationships of "d_users" */
export type D_UsersUsers_SnsArgs = {
  distinct_on?: Maybe<Array<Users_Sns_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Sns_Order_By>>;
  where?: Maybe<Users_Sns_Bool_Exp>;
};


/** columns and relationships of "d_users" */
export type D_UsersUsers_Sns_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Sns_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Sns_Order_By>>;
  where?: Maybe<Users_Sns_Bool_Exp>;
};

/** aggregated selection of "d_users" */
export type D_Users_Aggregate = {
  __typename?: 'd_users_aggregate';
  aggregate?: Maybe<D_Users_Aggregate_Fields>;
  nodes: Array<D_Users>;
};

/** aggregate fields of "d_users" */
export type D_Users_Aggregate_Fields = {
  __typename?: 'd_users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<D_Users_Max_Fields>;
  min?: Maybe<D_Users_Min_Fields>;
};


/** aggregate fields of "d_users" */
export type D_Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<D_Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "d_users". All fields are combined with a logical 'AND'. */
export type D_Users_Bool_Exp = {
  _and?: Maybe<Array<D_Users_Bool_Exp>>;
  _not?: Maybe<D_Users_Bool_Exp>;
  _or?: Maybe<Array<D_Users_Bool_Exp>>;
  content?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  deleted_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  mail?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  original_id?: Maybe<String_Comparison_Exp>;
  password?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  users_sns?: Maybe<Users_Sns_Bool_Exp>;
};

/** unique or primary key constraints on table "d_users" */
export enum D_Users_Constraint {
  /** unique or primary key constraint */
  DUsersMailKey = 'd_users_mail_key',
  /** unique or primary key constraint */
  DUsersOriginalIdKey = 'd_users_original_id_key',
  /** unique or primary key constraint */
  DUsersPkey = 'd_users_pkey'
}

/** input type for inserting data into table "d_users" */
export type D_Users_Insert_Input = {
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  mail?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  original_id?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  users_sns?: Maybe<Users_Sns_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type D_Users_Max_Fields = {
  __typename?: 'd_users_max_fields';
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  mail?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  original_id?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type D_Users_Min_Fields = {
  __typename?: 'd_users_min_fields';
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  mail?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  original_id?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "d_users" */
export type D_Users_Mutation_Response = {
  __typename?: 'd_users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<D_Users>;
};

/** on conflict condition type for table "d_users" */
export type D_Users_On_Conflict = {
  constraint: D_Users_Constraint;
  update_columns?: Array<D_Users_Update_Column>;
  where?: Maybe<D_Users_Bool_Exp>;
};

/** Ordering options when selecting data from "d_users". */
export type D_Users_Order_By = {
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mail?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  original_id?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  users_sns_aggregate?: Maybe<Users_Sns_Aggregate_Order_By>;
};

/** primary key columns input for table: d_users */
export type D_Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "d_users" */
export enum D_Users_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Id = 'id',
  /** column name */
  Mail = 'mail',
  /** column name */
  Name = 'name',
  /** column name */
  OriginalId = 'original_id',
  /** column name */
  Password = 'password',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "d_users" */
export type D_Users_Set_Input = {
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  mail?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  original_id?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "d_users" */
export enum D_Users_Update_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Id = 'id',
  /** column name */
  Mail = 'mail',
  /** column name */
  Name = 'name',
  /** column name */
  OriginalId = 'original_id',
  /** column name */
  Password = 'password',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "m_categories_detail" */
export type M_Categories_Detail = {
  __typename?: 'm_categories_detail';
  created_at: Scalars['timestamptz'];
  deleted_at?: Maybe<Scalars['timestamptz']>;
  header_id: Scalars['bigint'];
  id: Scalars['bigint'];
  name: Scalars['String'];
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregated selection of "m_categories_detail" */
export type M_Categories_Detail_Aggregate = {
  __typename?: 'm_categories_detail_aggregate';
  aggregate?: Maybe<M_Categories_Detail_Aggregate_Fields>;
  nodes: Array<M_Categories_Detail>;
};

/** aggregate fields of "m_categories_detail" */
export type M_Categories_Detail_Aggregate_Fields = {
  __typename?: 'm_categories_detail_aggregate_fields';
  avg?: Maybe<M_Categories_Detail_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<M_Categories_Detail_Max_Fields>;
  min?: Maybe<M_Categories_Detail_Min_Fields>;
  stddev?: Maybe<M_Categories_Detail_Stddev_Fields>;
  stddev_pop?: Maybe<M_Categories_Detail_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<M_Categories_Detail_Stddev_Samp_Fields>;
  sum?: Maybe<M_Categories_Detail_Sum_Fields>;
  var_pop?: Maybe<M_Categories_Detail_Var_Pop_Fields>;
  var_samp?: Maybe<M_Categories_Detail_Var_Samp_Fields>;
  variance?: Maybe<M_Categories_Detail_Variance_Fields>;
};


/** aggregate fields of "m_categories_detail" */
export type M_Categories_Detail_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<M_Categories_Detail_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "m_categories_detail" */
export type M_Categories_Detail_Aggregate_Order_By = {
  avg?: Maybe<M_Categories_Detail_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<M_Categories_Detail_Max_Order_By>;
  min?: Maybe<M_Categories_Detail_Min_Order_By>;
  stddev?: Maybe<M_Categories_Detail_Stddev_Order_By>;
  stddev_pop?: Maybe<M_Categories_Detail_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<M_Categories_Detail_Stddev_Samp_Order_By>;
  sum?: Maybe<M_Categories_Detail_Sum_Order_By>;
  var_pop?: Maybe<M_Categories_Detail_Var_Pop_Order_By>;
  var_samp?: Maybe<M_Categories_Detail_Var_Samp_Order_By>;
  variance?: Maybe<M_Categories_Detail_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "m_categories_detail" */
export type M_Categories_Detail_Arr_Rel_Insert_Input = {
  data: Array<M_Categories_Detail_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<M_Categories_Detail_On_Conflict>;
};

/** aggregate avg on columns */
export type M_Categories_Detail_Avg_Fields = {
  __typename?: 'm_categories_detail_avg_fields';
  header_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "m_categories_detail" */
export type M_Categories_Detail_Avg_Order_By = {
  header_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "m_categories_detail". All fields are combined with a logical 'AND'. */
export type M_Categories_Detail_Bool_Exp = {
  _and?: Maybe<Array<M_Categories_Detail_Bool_Exp>>;
  _not?: Maybe<M_Categories_Detail_Bool_Exp>;
  _or?: Maybe<Array<M_Categories_Detail_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  deleted_at?: Maybe<Timestamptz_Comparison_Exp>;
  header_id?: Maybe<Bigint_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "m_categories_detail" */
export enum M_Categories_Detail_Constraint {
  /** unique or primary key constraint */
  MCategoriesDetailHeaderIdKey = 'm_categories_detail_header_id_key',
  /** unique or primary key constraint */
  MCategoriesDetailPkey = 'm_categories_detail_pkey'
}

/** input type for incrementing numeric columns in table "m_categories_detail" */
export type M_Categories_Detail_Inc_Input = {
  header_id?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "m_categories_detail" */
export type M_Categories_Detail_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  header_id?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type M_Categories_Detail_Max_Fields = {
  __typename?: 'm_categories_detail_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  header_id?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "m_categories_detail" */
export type M_Categories_Detail_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  header_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type M_Categories_Detail_Min_Fields = {
  __typename?: 'm_categories_detail_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  header_id?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "m_categories_detail" */
export type M_Categories_Detail_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  header_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "m_categories_detail" */
export type M_Categories_Detail_Mutation_Response = {
  __typename?: 'm_categories_detail_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<M_Categories_Detail>;
};

/** on conflict condition type for table "m_categories_detail" */
export type M_Categories_Detail_On_Conflict = {
  constraint: M_Categories_Detail_Constraint;
  update_columns?: Array<M_Categories_Detail_Update_Column>;
  where?: Maybe<M_Categories_Detail_Bool_Exp>;
};

/** Ordering options when selecting data from "m_categories_detail". */
export type M_Categories_Detail_Order_By = {
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  header_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: m_categories_detail */
export type M_Categories_Detail_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "m_categories_detail" */
export enum M_Categories_Detail_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  HeaderId = 'header_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "m_categories_detail" */
export type M_Categories_Detail_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  header_id?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type M_Categories_Detail_Stddev_Fields = {
  __typename?: 'm_categories_detail_stddev_fields';
  header_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "m_categories_detail" */
export type M_Categories_Detail_Stddev_Order_By = {
  header_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type M_Categories_Detail_Stddev_Pop_Fields = {
  __typename?: 'm_categories_detail_stddev_pop_fields';
  header_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "m_categories_detail" */
export type M_Categories_Detail_Stddev_Pop_Order_By = {
  header_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type M_Categories_Detail_Stddev_Samp_Fields = {
  __typename?: 'm_categories_detail_stddev_samp_fields';
  header_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "m_categories_detail" */
export type M_Categories_Detail_Stddev_Samp_Order_By = {
  header_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type M_Categories_Detail_Sum_Fields = {
  __typename?: 'm_categories_detail_sum_fields';
  header_id?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "m_categories_detail" */
export type M_Categories_Detail_Sum_Order_By = {
  header_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** update columns of table "m_categories_detail" */
export enum M_Categories_Detail_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  HeaderId = 'header_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type M_Categories_Detail_Var_Pop_Fields = {
  __typename?: 'm_categories_detail_var_pop_fields';
  header_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "m_categories_detail" */
export type M_Categories_Detail_Var_Pop_Order_By = {
  header_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type M_Categories_Detail_Var_Samp_Fields = {
  __typename?: 'm_categories_detail_var_samp_fields';
  header_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "m_categories_detail" */
export type M_Categories_Detail_Var_Samp_Order_By = {
  header_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type M_Categories_Detail_Variance_Fields = {
  __typename?: 'm_categories_detail_variance_fields';
  header_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "m_categories_detail" */
export type M_Categories_Detail_Variance_Order_By = {
  header_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** columns and relationships of "m_categories_header" */
export type M_Categories_Header = {
  __typename?: 'm_categories_header';
  created_at: Scalars['timestamptz'];
  deleted_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['bigint'];
  /** An array relationship */
  m_categories_details: Array<M_Categories_Detail>;
  /** An aggregate relationship */
  m_categories_details_aggregate: M_Categories_Detail_Aggregate;
  name: Scalars['String'];
  updated_at?: Maybe<Scalars['timestamptz']>;
};


/** columns and relationships of "m_categories_header" */
export type M_Categories_HeaderM_Categories_DetailsArgs = {
  distinct_on?: Maybe<Array<M_Categories_Detail_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<M_Categories_Detail_Order_By>>;
  where?: Maybe<M_Categories_Detail_Bool_Exp>;
};


/** columns and relationships of "m_categories_header" */
export type M_Categories_HeaderM_Categories_Details_AggregateArgs = {
  distinct_on?: Maybe<Array<M_Categories_Detail_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<M_Categories_Detail_Order_By>>;
  where?: Maybe<M_Categories_Detail_Bool_Exp>;
};

/** aggregated selection of "m_categories_header" */
export type M_Categories_Header_Aggregate = {
  __typename?: 'm_categories_header_aggregate';
  aggregate?: Maybe<M_Categories_Header_Aggregate_Fields>;
  nodes: Array<M_Categories_Header>;
};

/** aggregate fields of "m_categories_header" */
export type M_Categories_Header_Aggregate_Fields = {
  __typename?: 'm_categories_header_aggregate_fields';
  avg?: Maybe<M_Categories_Header_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<M_Categories_Header_Max_Fields>;
  min?: Maybe<M_Categories_Header_Min_Fields>;
  stddev?: Maybe<M_Categories_Header_Stddev_Fields>;
  stddev_pop?: Maybe<M_Categories_Header_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<M_Categories_Header_Stddev_Samp_Fields>;
  sum?: Maybe<M_Categories_Header_Sum_Fields>;
  var_pop?: Maybe<M_Categories_Header_Var_Pop_Fields>;
  var_samp?: Maybe<M_Categories_Header_Var_Samp_Fields>;
  variance?: Maybe<M_Categories_Header_Variance_Fields>;
};


/** aggregate fields of "m_categories_header" */
export type M_Categories_Header_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<M_Categories_Header_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type M_Categories_Header_Avg_Fields = {
  __typename?: 'm_categories_header_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "m_categories_header". All fields are combined with a logical 'AND'. */
export type M_Categories_Header_Bool_Exp = {
  _and?: Maybe<Array<M_Categories_Header_Bool_Exp>>;
  _not?: Maybe<M_Categories_Header_Bool_Exp>;
  _or?: Maybe<Array<M_Categories_Header_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  deleted_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  m_categories_details?: Maybe<M_Categories_Detail_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "m_categories_header" */
export enum M_Categories_Header_Constraint {
  /** unique or primary key constraint */
  MCategoriesHeaderPkey = 'm_categories_header_pkey'
}

/** input type for incrementing numeric columns in table "m_categories_header" */
export type M_Categories_Header_Inc_Input = {
  id?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "m_categories_header" */
export type M_Categories_Header_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  m_categories_details?: Maybe<M_Categories_Detail_Arr_Rel_Insert_Input>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type M_Categories_Header_Max_Fields = {
  __typename?: 'm_categories_header_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type M_Categories_Header_Min_Fields = {
  __typename?: 'm_categories_header_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "m_categories_header" */
export type M_Categories_Header_Mutation_Response = {
  __typename?: 'm_categories_header_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<M_Categories_Header>;
};

/** on conflict condition type for table "m_categories_header" */
export type M_Categories_Header_On_Conflict = {
  constraint: M_Categories_Header_Constraint;
  update_columns?: Array<M_Categories_Header_Update_Column>;
  where?: Maybe<M_Categories_Header_Bool_Exp>;
};

/** Ordering options when selecting data from "m_categories_header". */
export type M_Categories_Header_Order_By = {
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  m_categories_details_aggregate?: Maybe<M_Categories_Detail_Aggregate_Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: m_categories_header */
export type M_Categories_Header_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "m_categories_header" */
export enum M_Categories_Header_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "m_categories_header" */
export type M_Categories_Header_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type M_Categories_Header_Stddev_Fields = {
  __typename?: 'm_categories_header_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type M_Categories_Header_Stddev_Pop_Fields = {
  __typename?: 'm_categories_header_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type M_Categories_Header_Stddev_Samp_Fields = {
  __typename?: 'm_categories_header_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type M_Categories_Header_Sum_Fields = {
  __typename?: 'm_categories_header_sum_fields';
  id?: Maybe<Scalars['bigint']>;
};

/** update columns of table "m_categories_header" */
export enum M_Categories_Header_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type M_Categories_Header_Var_Pop_Fields = {
  __typename?: 'm_categories_header_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type M_Categories_Header_Var_Samp_Fields = {
  __typename?: 'm_categories_header_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type M_Categories_Header_Variance_Fields = {
  __typename?: 'm_categories_header_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "m_sns" */
export type M_Sns = {
  __typename?: 'm_sns';
  created_at: Scalars['timestamptz'];
  deleted_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  updated_at?: Maybe<Scalars['timestamptz']>;
  /** fetch data from the table: "users_sns" */
  users_sns: Array<Users_Sns>;
  /** An aggregate relationship */
  users_sns_aggregate: Users_Sns_Aggregate;
};


/** columns and relationships of "m_sns" */
export type M_SnsUsers_SnsArgs = {
  distinct_on?: Maybe<Array<Users_Sns_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Sns_Order_By>>;
  where?: Maybe<Users_Sns_Bool_Exp>;
};


/** columns and relationships of "m_sns" */
export type M_SnsUsers_Sns_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Sns_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Sns_Order_By>>;
  where?: Maybe<Users_Sns_Bool_Exp>;
};

/** aggregated selection of "m_sns" */
export type M_Sns_Aggregate = {
  __typename?: 'm_sns_aggregate';
  aggregate?: Maybe<M_Sns_Aggregate_Fields>;
  nodes: Array<M_Sns>;
};

/** aggregate fields of "m_sns" */
export type M_Sns_Aggregate_Fields = {
  __typename?: 'm_sns_aggregate_fields';
  avg?: Maybe<M_Sns_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<M_Sns_Max_Fields>;
  min?: Maybe<M_Sns_Min_Fields>;
  stddev?: Maybe<M_Sns_Stddev_Fields>;
  stddev_pop?: Maybe<M_Sns_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<M_Sns_Stddev_Samp_Fields>;
  sum?: Maybe<M_Sns_Sum_Fields>;
  var_pop?: Maybe<M_Sns_Var_Pop_Fields>;
  var_samp?: Maybe<M_Sns_Var_Samp_Fields>;
  variance?: Maybe<M_Sns_Variance_Fields>;
};


/** aggregate fields of "m_sns" */
export type M_Sns_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<M_Sns_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type M_Sns_Avg_Fields = {
  __typename?: 'm_sns_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "m_sns". All fields are combined with a logical 'AND'. */
export type M_Sns_Bool_Exp = {
  _and?: Maybe<Array<M_Sns_Bool_Exp>>;
  _not?: Maybe<M_Sns_Bool_Exp>;
  _or?: Maybe<Array<M_Sns_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  deleted_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  users_sns?: Maybe<Users_Sns_Bool_Exp>;
};

/** unique or primary key constraints on table "m_sns" */
export enum M_Sns_Constraint {
  /** unique or primary key constraint */
  MSnsPkey = 'm_sns_pkey'
}

/** input type for incrementing numeric columns in table "m_sns" */
export type M_Sns_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "m_sns" */
export type M_Sns_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  users_sns?: Maybe<Users_Sns_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type M_Sns_Max_Fields = {
  __typename?: 'm_sns_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type M_Sns_Min_Fields = {
  __typename?: 'm_sns_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "m_sns" */
export type M_Sns_Mutation_Response = {
  __typename?: 'm_sns_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<M_Sns>;
};

/** input type for inserting object relation for remote table "m_sns" */
export type M_Sns_Obj_Rel_Insert_Input = {
  data: M_Sns_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<M_Sns_On_Conflict>;
};

/** on conflict condition type for table "m_sns" */
export type M_Sns_On_Conflict = {
  constraint: M_Sns_Constraint;
  update_columns?: Array<M_Sns_Update_Column>;
  where?: Maybe<M_Sns_Bool_Exp>;
};

/** Ordering options when selecting data from "m_sns". */
export type M_Sns_Order_By = {
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  users_sns_aggregate?: Maybe<Users_Sns_Aggregate_Order_By>;
};

/** primary key columns input for table: m_sns */
export type M_Sns_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "m_sns" */
export enum M_Sns_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "m_sns" */
export type M_Sns_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type M_Sns_Stddev_Fields = {
  __typename?: 'm_sns_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type M_Sns_Stddev_Pop_Fields = {
  __typename?: 'm_sns_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type M_Sns_Stddev_Samp_Fields = {
  __typename?: 'm_sns_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type M_Sns_Sum_Fields = {
  __typename?: 'm_sns_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "m_sns" */
export enum M_Sns_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type M_Sns_Var_Pop_Fields = {
  __typename?: 'm_sns_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type M_Sns_Var_Samp_Fields = {
  __typename?: 'm_sns_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type M_Sns_Variance_Fields = {
  __typename?: 'm_sns_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "d_users" */
  delete_d_users?: Maybe<D_Users_Mutation_Response>;
  /** delete single row from the table: "d_users" */
  delete_d_users_by_pk?: Maybe<D_Users>;
  /** delete data from the table: "m_categories_detail" */
  delete_m_categories_detail?: Maybe<M_Categories_Detail_Mutation_Response>;
  /** delete single row from the table: "m_categories_detail" */
  delete_m_categories_detail_by_pk?: Maybe<M_Categories_Detail>;
  /** delete data from the table: "m_categories_header" */
  delete_m_categories_header?: Maybe<M_Categories_Header_Mutation_Response>;
  /** delete single row from the table: "m_categories_header" */
  delete_m_categories_header_by_pk?: Maybe<M_Categories_Header>;
  /** delete data from the table: "m_sns" */
  delete_m_sns?: Maybe<M_Sns_Mutation_Response>;
  /** delete single row from the table: "m_sns" */
  delete_m_sns_by_pk?: Maybe<M_Sns>;
  /** delete data from the table: "users_sns" */
  delete_users_sns?: Maybe<Users_Sns_Mutation_Response>;
  /** delete single row from the table: "users_sns" */
  delete_users_sns_by_pk?: Maybe<Users_Sns>;
  /** insert data into the table: "d_users" */
  insert_d_users?: Maybe<D_Users_Mutation_Response>;
  /** insert a single row into the table: "d_users" */
  insert_d_users_one?: Maybe<D_Users>;
  /** insert data into the table: "m_categories_detail" */
  insert_m_categories_detail?: Maybe<M_Categories_Detail_Mutation_Response>;
  /** insert a single row into the table: "m_categories_detail" */
  insert_m_categories_detail_one?: Maybe<M_Categories_Detail>;
  /** insert data into the table: "m_categories_header" */
  insert_m_categories_header?: Maybe<M_Categories_Header_Mutation_Response>;
  /** insert a single row into the table: "m_categories_header" */
  insert_m_categories_header_one?: Maybe<M_Categories_Header>;
  /** insert data into the table: "m_sns" */
  insert_m_sns?: Maybe<M_Sns_Mutation_Response>;
  /** insert a single row into the table: "m_sns" */
  insert_m_sns_one?: Maybe<M_Sns>;
  /** insert data into the table: "users_sns" */
  insert_users_sns?: Maybe<Users_Sns_Mutation_Response>;
  /** insert a single row into the table: "users_sns" */
  insert_users_sns_one?: Maybe<Users_Sns>;
  /** update data of the table: "d_users" */
  update_d_users?: Maybe<D_Users_Mutation_Response>;
  /** update single row of the table: "d_users" */
  update_d_users_by_pk?: Maybe<D_Users>;
  /** update data of the table: "m_categories_detail" */
  update_m_categories_detail?: Maybe<M_Categories_Detail_Mutation_Response>;
  /** update single row of the table: "m_categories_detail" */
  update_m_categories_detail_by_pk?: Maybe<M_Categories_Detail>;
  /** update data of the table: "m_categories_header" */
  update_m_categories_header?: Maybe<M_Categories_Header_Mutation_Response>;
  /** update single row of the table: "m_categories_header" */
  update_m_categories_header_by_pk?: Maybe<M_Categories_Header>;
  /** update data of the table: "m_sns" */
  update_m_sns?: Maybe<M_Sns_Mutation_Response>;
  /** update single row of the table: "m_sns" */
  update_m_sns_by_pk?: Maybe<M_Sns>;
  /** update data of the table: "users_sns" */
  update_users_sns?: Maybe<Users_Sns_Mutation_Response>;
  /** update single row of the table: "users_sns" */
  update_users_sns_by_pk?: Maybe<Users_Sns>;
};


/** mutation root */
export type Mutation_RootDelete_D_UsersArgs = {
  where: D_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_D_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_M_Categories_DetailArgs = {
  where: M_Categories_Detail_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_M_Categories_Detail_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_M_Categories_HeaderArgs = {
  where: M_Categories_Header_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_M_Categories_Header_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_M_SnsArgs = {
  where: M_Sns_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_M_Sns_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Users_SnsArgs = {
  where: Users_Sns_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_Sns_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_D_UsersArgs = {
  objects: Array<D_Users_Insert_Input>;
  on_conflict?: Maybe<D_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_D_Users_OneArgs = {
  object: D_Users_Insert_Input;
  on_conflict?: Maybe<D_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_M_Categories_DetailArgs = {
  objects: Array<M_Categories_Detail_Insert_Input>;
  on_conflict?: Maybe<M_Categories_Detail_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_M_Categories_Detail_OneArgs = {
  object: M_Categories_Detail_Insert_Input;
  on_conflict?: Maybe<M_Categories_Detail_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_M_Categories_HeaderArgs = {
  objects: Array<M_Categories_Header_Insert_Input>;
  on_conflict?: Maybe<M_Categories_Header_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_M_Categories_Header_OneArgs = {
  object: M_Categories_Header_Insert_Input;
  on_conflict?: Maybe<M_Categories_Header_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_M_SnsArgs = {
  objects: Array<M_Sns_Insert_Input>;
  on_conflict?: Maybe<M_Sns_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_M_Sns_OneArgs = {
  object: M_Sns_Insert_Input;
  on_conflict?: Maybe<M_Sns_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_SnsArgs = {
  objects: Array<Users_Sns_Insert_Input>;
  on_conflict?: Maybe<Users_Sns_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_Sns_OneArgs = {
  object: Users_Sns_Insert_Input;
  on_conflict?: Maybe<Users_Sns_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_D_UsersArgs = {
  _set?: Maybe<D_Users_Set_Input>;
  where: D_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_D_Users_By_PkArgs = {
  _set?: Maybe<D_Users_Set_Input>;
  pk_columns: D_Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_M_Categories_DetailArgs = {
  _inc?: Maybe<M_Categories_Detail_Inc_Input>;
  _set?: Maybe<M_Categories_Detail_Set_Input>;
  where: M_Categories_Detail_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_M_Categories_Detail_By_PkArgs = {
  _inc?: Maybe<M_Categories_Detail_Inc_Input>;
  _set?: Maybe<M_Categories_Detail_Set_Input>;
  pk_columns: M_Categories_Detail_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_M_Categories_HeaderArgs = {
  _inc?: Maybe<M_Categories_Header_Inc_Input>;
  _set?: Maybe<M_Categories_Header_Set_Input>;
  where: M_Categories_Header_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_M_Categories_Header_By_PkArgs = {
  _inc?: Maybe<M_Categories_Header_Inc_Input>;
  _set?: Maybe<M_Categories_Header_Set_Input>;
  pk_columns: M_Categories_Header_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_M_SnsArgs = {
  _inc?: Maybe<M_Sns_Inc_Input>;
  _set?: Maybe<M_Sns_Set_Input>;
  where: M_Sns_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_M_Sns_By_PkArgs = {
  _inc?: Maybe<M_Sns_Inc_Input>;
  _set?: Maybe<M_Sns_Set_Input>;
  pk_columns: M_Sns_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_SnsArgs = {
  _inc?: Maybe<Users_Sns_Inc_Input>;
  _set?: Maybe<Users_Sns_Set_Input>;
  where: Users_Sns_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_Sns_By_PkArgs = {
  _inc?: Maybe<Users_Sns_Inc_Input>;
  _set?: Maybe<Users_Sns_Set_Input>;
  pk_columns: Users_Sns_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "d_users" */
  d_users: Array<D_Users>;
  /** fetch aggregated fields from the table: "d_users" */
  d_users_aggregate: D_Users_Aggregate;
  /** fetch data from the table: "d_users" using primary key columns */
  d_users_by_pk?: Maybe<D_Users>;
  /** fetch data from the table: "m_categories_detail" */
  m_categories_detail: Array<M_Categories_Detail>;
  /** fetch aggregated fields from the table: "m_categories_detail" */
  m_categories_detail_aggregate: M_Categories_Detail_Aggregate;
  /** fetch data from the table: "m_categories_detail" using primary key columns */
  m_categories_detail_by_pk?: Maybe<M_Categories_Detail>;
  /** fetch data from the table: "m_categories_header" */
  m_categories_header: Array<M_Categories_Header>;
  /** fetch aggregated fields from the table: "m_categories_header" */
  m_categories_header_aggregate: M_Categories_Header_Aggregate;
  /** fetch data from the table: "m_categories_header" using primary key columns */
  m_categories_header_by_pk?: Maybe<M_Categories_Header>;
  /** fetch data from the table: "m_sns" */
  m_sns: Array<M_Sns>;
  /** fetch aggregated fields from the table: "m_sns" */
  m_sns_aggregate: M_Sns_Aggregate;
  /** fetch data from the table: "m_sns" using primary key columns */
  m_sns_by_pk?: Maybe<M_Sns>;
  /** fetch data from the table: "users_sns" */
  users_sns: Array<Users_Sns>;
  /** An aggregate relationship */
  users_sns_aggregate: Users_Sns_Aggregate;
  /** fetch data from the table: "users_sns" using primary key columns */
  users_sns_by_pk?: Maybe<Users_Sns>;
};


export type Query_RootD_UsersArgs = {
  distinct_on?: Maybe<Array<D_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<D_Users_Order_By>>;
  where?: Maybe<D_Users_Bool_Exp>;
};


export type Query_RootD_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<D_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<D_Users_Order_By>>;
  where?: Maybe<D_Users_Bool_Exp>;
};


export type Query_RootD_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootM_Categories_DetailArgs = {
  distinct_on?: Maybe<Array<M_Categories_Detail_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<M_Categories_Detail_Order_By>>;
  where?: Maybe<M_Categories_Detail_Bool_Exp>;
};


export type Query_RootM_Categories_Detail_AggregateArgs = {
  distinct_on?: Maybe<Array<M_Categories_Detail_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<M_Categories_Detail_Order_By>>;
  where?: Maybe<M_Categories_Detail_Bool_Exp>;
};


export type Query_RootM_Categories_Detail_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootM_Categories_HeaderArgs = {
  distinct_on?: Maybe<Array<M_Categories_Header_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<M_Categories_Header_Order_By>>;
  where?: Maybe<M_Categories_Header_Bool_Exp>;
};


export type Query_RootM_Categories_Header_AggregateArgs = {
  distinct_on?: Maybe<Array<M_Categories_Header_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<M_Categories_Header_Order_By>>;
  where?: Maybe<M_Categories_Header_Bool_Exp>;
};


export type Query_RootM_Categories_Header_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootM_SnsArgs = {
  distinct_on?: Maybe<Array<M_Sns_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<M_Sns_Order_By>>;
  where?: Maybe<M_Sns_Bool_Exp>;
};


export type Query_RootM_Sns_AggregateArgs = {
  distinct_on?: Maybe<Array<M_Sns_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<M_Sns_Order_By>>;
  where?: Maybe<M_Sns_Bool_Exp>;
};


export type Query_RootM_Sns_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootUsers_SnsArgs = {
  distinct_on?: Maybe<Array<Users_Sns_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Sns_Order_By>>;
  where?: Maybe<Users_Sns_Bool_Exp>;
};


export type Query_RootUsers_Sns_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Sns_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Sns_Order_By>>;
  where?: Maybe<Users_Sns_Bool_Exp>;
};


export type Query_RootUsers_Sns_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "d_users" */
  d_users: Array<D_Users>;
  /** fetch aggregated fields from the table: "d_users" */
  d_users_aggregate: D_Users_Aggregate;
  /** fetch data from the table: "d_users" using primary key columns */
  d_users_by_pk?: Maybe<D_Users>;
  /** fetch data from the table: "m_categories_detail" */
  m_categories_detail: Array<M_Categories_Detail>;
  /** fetch aggregated fields from the table: "m_categories_detail" */
  m_categories_detail_aggregate: M_Categories_Detail_Aggregate;
  /** fetch data from the table: "m_categories_detail" using primary key columns */
  m_categories_detail_by_pk?: Maybe<M_Categories_Detail>;
  /** fetch data from the table: "m_categories_header" */
  m_categories_header: Array<M_Categories_Header>;
  /** fetch aggregated fields from the table: "m_categories_header" */
  m_categories_header_aggregate: M_Categories_Header_Aggregate;
  /** fetch data from the table: "m_categories_header" using primary key columns */
  m_categories_header_by_pk?: Maybe<M_Categories_Header>;
  /** fetch data from the table: "m_sns" */
  m_sns: Array<M_Sns>;
  /** fetch aggregated fields from the table: "m_sns" */
  m_sns_aggregate: M_Sns_Aggregate;
  /** fetch data from the table: "m_sns" using primary key columns */
  m_sns_by_pk?: Maybe<M_Sns>;
  /** fetch data from the table: "users_sns" */
  users_sns: Array<Users_Sns>;
  /** An aggregate relationship */
  users_sns_aggregate: Users_Sns_Aggregate;
  /** fetch data from the table: "users_sns" using primary key columns */
  users_sns_by_pk?: Maybe<Users_Sns>;
};


export type Subscription_RootD_UsersArgs = {
  distinct_on?: Maybe<Array<D_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<D_Users_Order_By>>;
  where?: Maybe<D_Users_Bool_Exp>;
};


export type Subscription_RootD_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<D_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<D_Users_Order_By>>;
  where?: Maybe<D_Users_Bool_Exp>;
};


export type Subscription_RootD_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootM_Categories_DetailArgs = {
  distinct_on?: Maybe<Array<M_Categories_Detail_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<M_Categories_Detail_Order_By>>;
  where?: Maybe<M_Categories_Detail_Bool_Exp>;
};


export type Subscription_RootM_Categories_Detail_AggregateArgs = {
  distinct_on?: Maybe<Array<M_Categories_Detail_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<M_Categories_Detail_Order_By>>;
  where?: Maybe<M_Categories_Detail_Bool_Exp>;
};


export type Subscription_RootM_Categories_Detail_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootM_Categories_HeaderArgs = {
  distinct_on?: Maybe<Array<M_Categories_Header_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<M_Categories_Header_Order_By>>;
  where?: Maybe<M_Categories_Header_Bool_Exp>;
};


export type Subscription_RootM_Categories_Header_AggregateArgs = {
  distinct_on?: Maybe<Array<M_Categories_Header_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<M_Categories_Header_Order_By>>;
  where?: Maybe<M_Categories_Header_Bool_Exp>;
};


export type Subscription_RootM_Categories_Header_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootM_SnsArgs = {
  distinct_on?: Maybe<Array<M_Sns_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<M_Sns_Order_By>>;
  where?: Maybe<M_Sns_Bool_Exp>;
};


export type Subscription_RootM_Sns_AggregateArgs = {
  distinct_on?: Maybe<Array<M_Sns_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<M_Sns_Order_By>>;
  where?: Maybe<M_Sns_Bool_Exp>;
};


export type Subscription_RootM_Sns_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootUsers_SnsArgs = {
  distinct_on?: Maybe<Array<Users_Sns_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Sns_Order_By>>;
  where?: Maybe<Users_Sns_Bool_Exp>;
};


export type Subscription_RootUsers_Sns_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Sns_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Sns_Order_By>>;
  where?: Maybe<Users_Sns_Bool_Exp>;
};


export type Subscription_RootUsers_Sns_By_PkArgs = {
  id: Scalars['Int'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "users_sns" */
export type Users_Sns = {
  __typename?: 'users_sns';
  created_at: Scalars['timestamptz'];
  deleted_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  /** An object relationship */
  m_sns: M_Sns;
  sns_id: Scalars['Int'];
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
  user_id: Scalars['uuid'];
};

/** aggregated selection of "users_sns" */
export type Users_Sns_Aggregate = {
  __typename?: 'users_sns_aggregate';
  aggregate?: Maybe<Users_Sns_Aggregate_Fields>;
  nodes: Array<Users_Sns>;
};

/** aggregate fields of "users_sns" */
export type Users_Sns_Aggregate_Fields = {
  __typename?: 'users_sns_aggregate_fields';
  avg?: Maybe<Users_Sns_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Users_Sns_Max_Fields>;
  min?: Maybe<Users_Sns_Min_Fields>;
  stddev?: Maybe<Users_Sns_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Sns_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Sns_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Sns_Sum_Fields>;
  var_pop?: Maybe<Users_Sns_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Sns_Var_Samp_Fields>;
  variance?: Maybe<Users_Sns_Variance_Fields>;
};


/** aggregate fields of "users_sns" */
export type Users_Sns_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Sns_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "users_sns" */
export type Users_Sns_Aggregate_Order_By = {
  avg?: Maybe<Users_Sns_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Users_Sns_Max_Order_By>;
  min?: Maybe<Users_Sns_Min_Order_By>;
  stddev?: Maybe<Users_Sns_Stddev_Order_By>;
  stddev_pop?: Maybe<Users_Sns_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Users_Sns_Stddev_Samp_Order_By>;
  sum?: Maybe<Users_Sns_Sum_Order_By>;
  var_pop?: Maybe<Users_Sns_Var_Pop_Order_By>;
  var_samp?: Maybe<Users_Sns_Var_Samp_Order_By>;
  variance?: Maybe<Users_Sns_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "users_sns" */
export type Users_Sns_Arr_Rel_Insert_Input = {
  data: Array<Users_Sns_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Users_Sns_On_Conflict>;
};

/** aggregate avg on columns */
export type Users_Sns_Avg_Fields = {
  __typename?: 'users_sns_avg_fields';
  id?: Maybe<Scalars['Float']>;
  sns_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "users_sns" */
export type Users_Sns_Avg_Order_By = {
  id?: Maybe<Order_By>;
  sns_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "users_sns". All fields are combined with a logical 'AND'. */
export type Users_Sns_Bool_Exp = {
  _and?: Maybe<Array<Users_Sns_Bool_Exp>>;
  _not?: Maybe<Users_Sns_Bool_Exp>;
  _or?: Maybe<Array<Users_Sns_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  deleted_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  m_sns?: Maybe<M_Sns_Bool_Exp>;
  sns_id?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  url?: Maybe<String_Comparison_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "users_sns" */
export enum Users_Sns_Constraint {
  /** unique or primary key constraint */
  UsersSnsPkey = 'users_sns_pkey'
}

/** input type for incrementing numeric columns in table "users_sns" */
export type Users_Sns_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  sns_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "users_sns" */
export type Users_Sns_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  m_sns?: Maybe<M_Sns_Obj_Rel_Insert_Input>;
  sns_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Users_Sns_Max_Fields = {
  __typename?: 'users_sns_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  sns_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "users_sns" */
export type Users_Sns_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  sns_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Sns_Min_Fields = {
  __typename?: 'users_sns_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  sns_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "users_sns" */
export type Users_Sns_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  sns_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "users_sns" */
export type Users_Sns_Mutation_Response = {
  __typename?: 'users_sns_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users_Sns>;
};

/** on conflict condition type for table "users_sns" */
export type Users_Sns_On_Conflict = {
  constraint: Users_Sns_Constraint;
  update_columns?: Array<Users_Sns_Update_Column>;
  where?: Maybe<Users_Sns_Bool_Exp>;
};

/** Ordering options when selecting data from "users_sns". */
export type Users_Sns_Order_By = {
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  m_sns?: Maybe<M_Sns_Order_By>;
  sns_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: users_sns */
export type Users_Sns_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "users_sns" */
export enum Users_Sns_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Id = 'id',
  /** column name */
  SnsId = 'sns_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "users_sns" */
export type Users_Sns_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  sns_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Users_Sns_Stddev_Fields = {
  __typename?: 'users_sns_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  sns_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "users_sns" */
export type Users_Sns_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  sns_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Users_Sns_Stddev_Pop_Fields = {
  __typename?: 'users_sns_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  sns_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "users_sns" */
export type Users_Sns_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  sns_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Users_Sns_Stddev_Samp_Fields = {
  __typename?: 'users_sns_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  sns_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "users_sns" */
export type Users_Sns_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  sns_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Users_Sns_Sum_Fields = {
  __typename?: 'users_sns_sum_fields';
  id?: Maybe<Scalars['Int']>;
  sns_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "users_sns" */
export type Users_Sns_Sum_Order_By = {
  id?: Maybe<Order_By>;
  sns_id?: Maybe<Order_By>;
};

/** update columns of table "users_sns" */
export enum Users_Sns_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Id = 'id',
  /** column name */
  SnsId = 'sns_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Users_Sns_Var_Pop_Fields = {
  __typename?: 'users_sns_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  sns_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "users_sns" */
export type Users_Sns_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  sns_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Users_Sns_Var_Samp_Fields = {
  __typename?: 'users_sns_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  sns_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "users_sns" */
export type Users_Sns_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  sns_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Users_Sns_Variance_Fields = {
  __typename?: 'users_sns_variance_fields';
  id?: Maybe<Scalars['Float']>;
  sns_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "users_sns" */
export type Users_Sns_Variance_Order_By = {
  id?: Maybe<Order_By>;
  sns_id?: Maybe<Order_By>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'query_root', d_users: Array<{ __typename?: 'd_users', id: any, name: string, original_id: string, mail: string, password: string }> };

export type GetUserByIdQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetUserByIdQuery = { __typename?: 'query_root', d_users_by_pk?: Maybe<{ __typename?: 'd_users', id: any, name: string, users_sns: Array<{ __typename?: 'users_sns', sns_id: number, url?: Maybe<string> }> }> };

export type GetUserByOriginalIdQueryVariables = Exact<{
  original_id: Scalars['String'];
}>;


export type GetUserByOriginalIdQuery = { __typename?: 'query_root', d_users: Array<{ __typename?: 'd_users', id: any, name: string, original_id: string, mail: string, password: string, content?: Maybe<string>, users_sns: Array<{ __typename?: 'users_sns', sns_id: number, url?: Maybe<string> }> }> };


export const GetUsersDocument = gql`
    query GetUsers {
  d_users {
    id
    name
    original_id
    mail
    password
  }
}
    `;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export const GetUserByIdDocument = gql`
    query GetUserById($id: uuid!) {
  d_users_by_pk(id: $id) {
    id
    name
    users_sns {
      sns_id
      url
    }
  }
}
    `;

/**
 * __useGetUserByIdQuery__
 *
 * To run a query within a React component, call `useGetUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserByIdQuery(baseOptions: Apollo.QueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
      }
export function useGetUserByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
        }
export type GetUserByIdQueryHookResult = ReturnType<typeof useGetUserByIdQuery>;
export type GetUserByIdLazyQueryHookResult = ReturnType<typeof useGetUserByIdLazyQuery>;
export type GetUserByIdQueryResult = Apollo.QueryResult<GetUserByIdQuery, GetUserByIdQueryVariables>;
export const GetUserByOriginalIdDocument = gql`
    query GetUserByOriginalId($original_id: String!) {
  d_users(where: {original_id: {_eq: $original_id}}) {
    id
    name
    original_id
    mail
    password
    content
    users_sns {
      sns_id
      url
    }
  }
}
    `;

/**
 * __useGetUserByOriginalIdQuery__
 *
 * To run a query within a React component, call `useGetUserByOriginalIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByOriginalIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByOriginalIdQuery({
 *   variables: {
 *      original_id: // value for 'original_id'
 *   },
 * });
 */
export function useGetUserByOriginalIdQuery(baseOptions: Apollo.QueryHookOptions<GetUserByOriginalIdQuery, GetUserByOriginalIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserByOriginalIdQuery, GetUserByOriginalIdQueryVariables>(GetUserByOriginalIdDocument, options);
      }
export function useGetUserByOriginalIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserByOriginalIdQuery, GetUserByOriginalIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserByOriginalIdQuery, GetUserByOriginalIdQueryVariables>(GetUserByOriginalIdDocument, options);
        }
export type GetUserByOriginalIdQueryHookResult = ReturnType<typeof useGetUserByOriginalIdQuery>;
export type GetUserByOriginalIdLazyQueryHookResult = ReturnType<typeof useGetUserByOriginalIdLazyQuery>;
export type GetUserByOriginalIdQueryResult = Apollo.QueryResult<GetUserByOriginalIdQuery, GetUserByOriginalIdQueryVariables>;