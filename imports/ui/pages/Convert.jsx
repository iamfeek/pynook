import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import PageHeader from '/imports/ui/components/utils/PageHeader';

import ConvertPanel from '/imports/ui/components/convert/ConvertPanel';
import BusinessForm from '/imports/ui/components/business/BusinessForm';

const Convert = props => {
  return(
    <div id="convert">
      <PageHeader src="/business-convert.jpg" title="Why Us?" />

      <div className="row">
        <div className="col s12 l10 offset-l1 center">
          <h1>Widen your network</h1>
          <h4>
            What more can you ask for if not a widened network?
          </h4>

          <p>With a total of around 12,000 users on our platform at this very moment, we are sure that your
          outreach to the masses will be expanded.</p>


        <ConvertPanel />

        </div>
      </div>
    </div>
  )
}

export default createContainer(() => {
  DocHead.setTitle("Convert To Business - Pynook");


  let isBusinessAccount = Roles.userIsInRole(Meteor.userId(), "business");
  if(isBusinessAccount) FlowRouter.go("dashboard");

  return {};
}, Convert)
