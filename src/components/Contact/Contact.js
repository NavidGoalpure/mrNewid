/* eslint no-unused-vars: 0 */

import { navigate } from "gatsby";
import Button from "antd/lib/button";
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import PropTypes from "prop-types";
import React from "react";

const FormItem = Form.Item;
const { TextArea } = Input;
import "antd/lib/form/style/index.css";
import "antd/lib/input/style/index.css";
import "antd/lib/button/style/index.css";
import { ThemeContext } from "../../layouts";
import { FaTelegram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Contact = props => {
  const { getFieldDecorator } = props.form;

  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        sendMessage(values);
      }
    });
  }

  function sendMessage(values) {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...values })
    })
      .then(() => {
        console.log("Form submission success");
        navigate("/success");
      })
      .catch(error => {
        console.error("Form submission error:", error);
        this.handleNetworkError();
      });
  }

  function handleNetworkError(e) {
    console.log("submit Error");
  }

  return (
    <React.Fragment>
      <ThemeContext.Consumer>
        {theme => (
          <div className="form">
            <Form
              name="contact"
              onSubmit={handleSubmit}
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <FormItem label="نام">
                {getFieldDecorator("name", {
                  rules: [
                    {
                      whitespace: true
                    }
                  ]
                })(<Input name="name" />)}
              </FormItem>
              <FormItem label="ایمیل">
                {getFieldDecorator("email", {
                  rules: [
                    {
                      required: true,
                      message: "!آدرس ایمیل رو وارد کنین",
                      whitespace: true,
                      type: "email"
                    }
                  ]
                })(<Input name="email" />)}
              </FormItem>
              <FormItem label="پیام">
                {getFieldDecorator("message", {
                  rules: [
                    { required: true, message: "Please input your message!", whitespace: true }
                  ]
                })(
                  <TextArea name="message" placeholder="" autosize={{ minRows: 4, maxRows: 10 }} />
                )}
              </FormItem>
              <FormItem>
                <Button type="primary" htmlType="submit">
                  ارسال
                </Button>
              </FormItem>
            </Form>
            <div className="iconContainer">
              <MdEmail color="#E24744" size="3em" />
              <FaTelegram color="#4898DE" size="2.7em" />
            </div>
            {/* --- STYLES --- */}
            <style jsx>{`
              .iconContainer {
                display: flex;
                margin-top: 3em;
                width: 7em;
                justify-content: space-between;
              }

              .form {
                background: transparent;
              }
              .form :global(.ant-row.ant-form-item) {
                margin: 0 0 1em;
                font-family: Vazir1;
              }
              .form :global(.ant-row.ant-form-item:last-child) {
                margin-top: 1em;
              }
              .form :global(.ant-form-item-control) {
                line-height: 1em;
              }
              .form :global(.ant-form-item-label) {
                line-height: 2em;
                margin-bottom: 0.5em;
                text-align: right;
              }
              .form :global(.ant-form-item) {
                margin: 0;
              }
              .form :global(.ant-input) {
                appearance: none;
                height: auto;
                font-size: 1.2em;
                padding: 0.5em 0.6em;
              }
              .form :global(.ant-btn-primary) {
                font-family: "Vazir1";
                height: auto;
                font-size: 1.2em;
                padding: 0.5em 3em;
                background: ${theme.color.brand.primary};
                border: 1px solid ${theme.color.brand.primary};
              }
              .form :global(.ant-form-explain) {
                margin-top: 0.2em;
              }

              @from-width desktop {
                .form :global(input) {
                  max-width: 50%;
                }
              }
            `}</style>
          </div>
        )}
      </ThemeContext.Consumer>
    </React.Fragment>
  );
};

Contact.propTypes = {
  form: PropTypes.object
};

const ContactForm = Form.create({})(Contact);

export default ContactForm;
