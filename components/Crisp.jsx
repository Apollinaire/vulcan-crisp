import React from 'react';
import Helmet from 'react-helmet';
import { withCurrentUser, registerComponent, getSetting } from 'meteor/vulcan:core';

let isProd = Meteor.isProduction;

function Crisp(props) {
  let crispIdSetting = getSetting('crispId');
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

registerComponent('Crisp', Crisp, withCurrentUser);
