/* // @ts-ignore
import * as React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

import { CreateCardMutation, CreateCardVariables } from "../../schemaTypes";

export const createCardMutation = gql`
  mutation CreateCardMutation(
    $name: String!
    $picture1: Upload
    $picture2: Upload
    $picture3: Upload
    $picture4: Upload
    $category: String!
    $answer: String!
  ) {
    createCard(
      input: {
        name: $name
        picture1: $picture1
        picture2: $picture2
        picture3: $picture3
        picture4: $picture4
        category: $category
        answer: $answer
      }
    )
  }
`;

export interface WithCreateCardProps {
  createCard: (variables: CreateCardVariables) => void;
}

export const withCreateCard: any = graphql<
  any,
  CreateCardMutation,
  CreateCardMutationVariables,
  WithCreateCardProps
>(createCardMutation, {
  props: ({ mutate }) => ({
    createCard: async variables => {
      if (!mutate) {
        return;
      }

      const response = await mutate({
        variables
      });

      console.log(response);
    }
  })
});
 */
