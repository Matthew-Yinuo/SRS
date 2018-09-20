import * as React from "react";
import { RegisterView } from "./view/RegisterView";
import { RegisterController } from "@spaced/controller";
import { RouteComponentProps } from "react-router-dom";

// container -> view
// container -> connector -> view
// controller -> connector -> view
export class RegisterConnector extends React.PureComponent<
  RouteComponentProps<{}>
> {
  onFinish = () => {
    this.props.history.push("/confirm/email", {
      message: "please confirm that email"
    });
  };

  dummySubmit = async (values: any) => {
    console.log(values);
    return null;
  };

  render() {
    return (
      <RegisterController>
        {({ submit }: { submit: any }) => (
          <RegisterView onFinish={this.onFinish} submit={submit} />
        )}
      </RegisterController>
    );
  }
}
