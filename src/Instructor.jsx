import React from "react";
class Instructor extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log("Mounted - Instructor");
  }
  componentDidUpdate() {
    console.log("Update - Instructor");
  }
  componentWillUnmount() {
    console.log("UnMount - Instructor");
  }
  render() {
    console.log("Render - Instructor");
    const { instructor } = this.props;

    if (!instructor) {
      return <div>Loading instructor details...</div>; // Render fallback UI if no instructor is passed
    }
    return (
      <div className="">
        Name: {this.props.instructor.name}
        <br />
        Email: {this.props.instructor.email}
        <br />
        Phone: {this.props.instructor.phone}
        <br />
      </div>
    );
  }
}
export default Instructor;
