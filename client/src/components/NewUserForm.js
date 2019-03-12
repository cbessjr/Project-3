import React from 'react';



export function NewUserForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <label>
        User Name:
            <input type="text" value={props.state.value} onChange={props.handleChange} />
      </label>
      <input type="submit" value="Submit" />

      <label>
        Password:
            <input type="password" value={props.state.value} onChange={props.handleChange} />
      </label>
      <input type="submit" value="Submit" />

      <button variant="primary" size="sm">
        Submit
          </button>
    </form>
  );
}