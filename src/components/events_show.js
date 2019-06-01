import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import { getEvent, deleteEvent, putEvent } from '../actions';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class EventsShow extends Component {
  // constructor(props) {
  //   super(props);
  //   console.log('EventShow');
  // }

  componentDidMount() {
    const { id } = this.props.match.params;

    if (id) this.props.getEvent(id);
  }

  renderField(field) {
    // console.log(field);

    const { input, label, type, meta: { touched, error }} = field;

    return (
      <TextField
        hintText={label}
        floatingLabelText={label}
        type={type}
        errorText={touched && error}
        {...input}
        fullWidth={true}
      />
      // <div>
      //   <input {...input} placeholder={label} type={type} />
      //   { touched && error && <span>{error}</span>}
      // </div>
    );
  }

  async onDeleteClick() {
    // console.log(this.props);
    const { id } = this.props.match.params;
    // console.log(id);

    await this.props.deleteEvent(id);
    this.props.history.push('/');
  }

  async onSubmit(values) {
    await this.props.putEvent(values);
    this.props.history.push('/');
  }
  render() {
    // console.log(this.props);
    // handleSubmit : propsのサブミット関数(redux-form)
    // pristine : 入力項目のいずれかが空のときtrueとなる
    // submitting : submitボタンが押されたらtrueとなる（今回は2度押し防止に使用)
    // invalid : 入力エラーがあるか
    const { handleSubmit, pristine, submitting, invalid } = this.props;

    const style = { margin: 12};

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div><Field label="Title" name="title" type="text" component={this.renderField} /></div>
        <div><Field label="Body" name="body" type="text" component={this.renderField} /></div>

        <RaisedButton label="Submit" type="submit" style={style} disabled={pristine || submitting || invalid} />
        <RaisedButton label="Cancel" style={style} containerElement={<Link to="/" />} />
        <RaisedButton label="Delete" style={style} onClick={this.onDeleteClick.bind(this)} />
        {/* <div>
          <input type="submit" value="submit" disabled={pristine || submitting || invalid} />
          <Link to="/">Cancel</Link> 
          <Link to="/" onClick={this.onDeleteClick.bind(this)}>Delete</Link> 
        </div> */}
      </form>
    );
  }
}

const validate = values => {
  const errors = {};

  if (!values.title) errors.title = "Enter a title, please."
  if (!values.body) errors.body = "Enter a body, please."

  return errors;
}

const mapDispatchToProps = ({ deleteEvent, getEvent, putEvent })

const mapStateToProps = (state, ownProps) => {
  const event = state.events[ownProps.match.params.id];
  return { initialValues: event, event };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({ validate, form: 'eventShowForm', enableReinitialize: true })(EventsShow)
);
