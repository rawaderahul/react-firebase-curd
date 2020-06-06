import React, { useState, useEffect } from "react";
import ContactsForm from "./contactsform";
const Contacts = () => {
  return (
    <div>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Contact Register </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5">
          <ContactsForm></ContactsForm>
        </div>
        <div className="col-md-7">List of Contacts</div>
      </div>
    </div>
  );
};

export default Contacts;
