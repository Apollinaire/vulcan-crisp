import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { withCurrentUser, registerComponent, getSetting } from 'meteor/vulcan:core';

let isProd = Meteor.isProduction;

function Crisp(props) {
  let crispIdSetting = getSetting('crispId');
  //display a warning in the console when no setting is found.
  if (typeof crispIdSetting != 'string') {
    console.warn('crispIdSetting not found, please add it to you settings.json file');
    return null;
  };
  let { currentUser, currentUserLoading, showOnDebug } = props;
  if (typeof crispIdSetting === 'string' && (isProd || showOnDebug === true) && !currentUserLoading) {
    return (
      <Helmet>
        <script type="text/javascript">{`window.$crisp=[];
        window.CRISP_WEBSITE_ID="`+ crispIdSetting +`";
        (function(){
          d=document;s=d.createElement("script");
          s.src="https://client.crisp.chat/l.js";
          s.async=1;
          d.getElementsByTagName("head")[0].appendChild(s);})();
        `
        + (currentUser != null ? 
        `
        window.$crisp.push(["set", "user:email", "`+ currentUser.email +`"]);
        window.$crisp.push(["set", "user:nickname", "`+ currentUser.displayName +`"]);
        ` : ``)
        }</script>
      </Helmet>
    );
  } else return null;
}

Crisp.propTypes = {
  showOnDebug: PropTypes.bool,
}

registerComponent('Crisp', Crisp, withCurrentUser);
