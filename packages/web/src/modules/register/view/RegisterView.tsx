import * as React from "react";
import { Button, Icon, Form, Segment, Divider } from "semantic-ui-react";
import { withFormik, FormikProps, Field } from "formik";
import { registerUserSchema } from "@spaced/common";
import { Link } from "react-router-dom";
import { NormalizedErrorMap } from "@spaced/controller";

interface FormValues {
  email: string;
  password: string;
  passwordConfirm: string;
}

interface Props {
  onFinish: () => void;
  submit: (values: FormValues) => Promise<NormalizedErrorMap | null>;
}

class RC extends React.PureComponent<FormikProps<FormValues> & Props> {
  render() {
    const { touched, errors, isSubmitting } = this.props;
    return (
      <Form>
        <div style={{ width: 400, margin: "auto" }}>
          <Field type="email" name="email" placeholder="email" />
          {touched.email && errors.email && <div>{errors.email}</div>}
          <Divider hidden={true} fitted={true} />
          <Field
            name="password"
            type="password"
            prefix={
              <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} /> as any
            }
            placeholder="Password"
          />
          {errors.password && touched.password && <div>{errors.password}</div>}
          <Divider hidden={true} fitted={true} />
          <Field
            name="passwordConfirm"
            placeholder="Confirm password"
            type="password"
            prefix={
              <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} /> as any
            }
          />
          {errors.passwordConfirm &&
            touched.passwordConfirm && <div>{errors.passwordConfirm}</div>}
          <Divider hidden={true} fitted={true} />
          <Segment padded={true}>
            <Button
              type="primary"
              primary={true}
              role="submit"
              fluid={true}
              className="login-form-button"
              disabled={isSubmitting}
            >
              Register
            </Button>
            <Divider horizontal={true}>Or</Divider>
            <Button basic={true} fluid={true} link={true}>
              <Link to="/login">Login here</Link>
            </Button>
          </Segment>
        </div>
      </Form>
    );
  }
}

export const RegisterView = withFormik<Props, FormValues>({
  validationSchema: registerUserSchema,
  mapPropsToValues: () => ({ email: "", password: "", passwordConfirm: "" }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    } else {
      props.onFinish();
    }
  }
})(RC);
