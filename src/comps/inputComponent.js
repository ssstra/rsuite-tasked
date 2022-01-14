import React from "react";
import { Button } from "rsuite";
import { Form } from "rsuite";

function InputComponent(props) {
  return (
    <>
      <div>
        <Form onSubmit={props.handleSubmit}>
          <input
            type="text"
            placeholder="Add the first task ..."
            value={props.inputValue}
            onChange={props.handleChange}
            id="input-ent"
          ></input>

          <Button
            appearance="primary"
            id="button-ent"
            onClick={props.handleSubmit}
          >
            ✔
          </Button>
        </Form>
      </div>
    </>
  );
}

export default InputComponent;
