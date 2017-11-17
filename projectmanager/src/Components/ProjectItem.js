import React, { Component } from 'react';

class ProjectItems extends Component {
  deleteProject(id){
    this.props.onDelete(id);
  }


  render() {
    return (
      <li className="ProjectItems">
         <strong>{this.props.project.title}:</strong> {this.props.project.category} <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>X</a>
      </li>
    );
  }
}

export default ProjectItems;
