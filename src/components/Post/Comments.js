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

import FacebookProvider, { Comments as FBComments } from "react-facebook";

import config from "../../../content/meta/config";

const StaticComments = props => {
  console.log("props in comments=", props);

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
  const { slug, theme } = props;

  return (
    <React.Fragment>
      <ThemeContext.Consumer>
        {theme => (
          <div className="form">
            ثبت دیدگاه
            <Form
              name="contact"
              onSubmit={handleSubmit}
              method="POST"
              action="https://api.staticman.net/v2/entry/NavidGoalpure/mrNewid/commenting/comments"
            >
              <Input name="options[slug]" type="hidden" value={slug} />

              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <FormItem label="نام">
                  {getFieldDecorator("name", {
                    rules: [
                      {
                        required: true,
                        message: "اسمتو فراموش کردی بنویسی!",
                        whitespace: true
                      }
                    ]
                  })(<Input name="name" type="text" placeholder="نام" />)}
                </FormItem>
                <FormItem label="ایمیل">
                  {getFieldDecorator("email", {
                    rules: [
                      {
                        required: true,
                        message: "آدرس ایمیل رو جا انداختی!",
                        whitespace: true,
                        type: "email"
                      }
                    ]
                  })(<Input name="email" type="email" placeholder="ایمیل" />)}
                </FormItem>
              </div>

              <FormItem label="پیام">
                {getFieldDecorator("message", {
                  rules: [{ required: true, message: "پس نظرت چی شد؟", whitespace: true }]
                })(
                  <TextArea
                    autosize={{ minRows: 4, maxRows: 10 }}
                    name="fields[message]"
                    placeholder="نظر"
                  />
                )}
              </FormItem>
              <FormItem>
                <Button type="primary" htmlType="submit">
                  ارسال
                </Button>
              </FormItem>
            </Form>
            {/* --- STYLES --- */}
            <style jsx>{`
              .form :global(.ant-row.ant-form-item) {
                margin: 0 0 1em;
                font-family: Vazir1;
              }
              .form :global(.ant-row.ant-form-item:last-child) {
                margin-right: 3em;
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
                  // max-width: 50%;
                }
              }
            `}</style>
          </div>
        )}
      </ThemeContext.Consumer>
    </React.Fragment>
  );
};

StaticComments.propTypes = {
  slug: PropTypes.string.isRequired,
  facebook: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  form: PropTypes.object
};
const Comments = Form.create({})(StaticComments);

export default Comments;
