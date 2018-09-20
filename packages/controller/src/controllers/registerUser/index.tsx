import gql from "graphql-tag";
import * as React from "react";
import { graphql, ChildMutateProps } from "react-apollo";
import {
    RegisterUserMutation,
    RegisterUserMutationVariables
} from "../../schemaTypes";

interface Props {
    children: (
        data: { submit: (values: RegisterUserMutationVariables) => Promise<null> }
    ) => JSX.Element | null;
}

class RC extends React.PureComponent<
    ChildMutateProps<Props, RegisterUserMutation, RegisterUserMutationVariables>
    > {
    submit = async (values: RegisterUserMutationVariables) => {
        console.log(values);
        this.props.mutate({
            variables: values
        });
        return null;
    };

    render() {
        return this.props.children({ submit: this.submit });
    }
}

const registerUserMutation = gql`
  mutation RegisterUserMutation($email: String!, $password: String!) {
    register(email: $email, password: $password) {
      path
      message
    }
  }
`;

export const RegisterController: any = graphql<
    Props,
    RegisterUserMutation,
    RegisterUserMutationVariables
    >(registerUserMutation)(RC);
