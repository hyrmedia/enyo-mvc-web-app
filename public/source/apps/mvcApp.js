// https://github.com/tastejs/todomvc/tree/gh-pages/labs/dependency-examples/enyo_backbone/js
//
// Maybe 2.3 will make this a sinlge app with configuration for switching views?
// http://forums.enyojs.com/discussion/comment/6928/#Comment_6928
enyo.kind({
    name: "Bootplate.MvcApp"
    , kind: "enyo.Application"
    , published: {
        ajaxBaseURL: 'http://localhost'
        , ajaxBasePort: '3000'
        , data: {}
        , adminFlag: false
        , gravatarEmail: ''
        , broadcast: {displayClass:'', message: ''}
        , wsSocketURL: 'ws://localhost'
        , wsSocketPort: '3000'
    }
    , controllers: [
        {  name: "publicController",
           kind: "Bootplate.PublicController"
        }
        , { name: "authController",
            kind: "Bootplate.HomeController"
        }
        , { name: "routes",
            kind: "Bootplate.Routes"
        }
  ]
  , view:'Bootplate.PublicView'
  , publicView:''
  , authView:''
  , create: function() {
      this.publicView = new Bootplate.PublicView({name: "publicView"});
      this.authView = new Bootplate.HomeView({name: "homeView"});
      this.createComponent({name:'popupDialog', kind: "PopupDialog", owner: this});
  }
  , setPublicView: function() {
      mvcApp.view = this.publicView;
      mvcApp.render();
      window.location.hash = '/login'
  }
  , setAuthView: function() {
    console.log(1);
      mvcApp.view = this.authView;
      mvcApp.render();
      window.location.hash = '/home'
      if (this.data && this.data.userData) {
        mvcApp.setGravatarEmail(mvcApp.data.userData.email);
      } else {
        mvcApp.setGravatarEmail('');
      }

  }
  , showMessage: function(messageText) {
      this.$.popupDialog.showMessage(messageText);
  }
  , adminFlagChanged: function(oldVal) {
    console.log("CHANGED " + oldVal);
      // if flag is true, this allows Admin links to be seen, but server will
      // still restrict functionality
      // each view implementing admin options will have to be responsible for show/hide
      // and look for hideAdminOptions and showAdminOptions events
    mvcApp.authView.$.bodyContainer.$.adminUpdateUserLink.hide()
      if (this.adminFlag) {
        mvcApp.waterfall('onShowAdminOptions');
      } else {
        mvcApp.waterfall('onHideAdminOptions');
      }
  }
  , gravatarEmailChanged: function(oldVal) {
      mvcApp.waterfall('onSetupGravatar');
  }
});




