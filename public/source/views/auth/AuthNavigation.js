/**
* This is the Navigation kind when the user is authenticated
*
* - showAdminOptions() Responds to the onShowAdminOptions event to show the admin toolbar
* - hideAdminOptions() Responds to the onHideAdminOptions event to hide the admin toolbar
* - setupTopNav() Implements this for the top navigation
* - setupBottompNav() Implements this for the bottom navigation, used for administrative links
*/
enyo.kind({
  name: 'Bootplate.AuthNavigation'
  , kind: "Bootplate.Navigation"
  , create: function() {
      this.inherited(arguments);
  }
  , handlers: {
      onShowAdminOptions: 'showAdminOptions'
      , onHideAdminOptions: 'hideAdminOptions'
  }
  , published: {
      adminNavToolbar : ''
  }
  , setupTopNav: function(owner) {
      this.inherited(arguments);
      var topNavToolbar = owner.createComponent({kind: "onyx.Toolbar", name: 'topNavToolbar', owner: owner});

      // need to create buttons that behave as links
      this.createLinkButton(topNavToolbar, 'home', 'Home');
      this.createLinkButton(topNavToolbar, 'updateMyUserInfo', 'Update My Info');
      this.createLinkButton(topNavToolbar, 'updateMyPassword', 'Update My Password');
      this.createLinkButton(topNavToolbar, 'logout', 'Logout', 'button-float-right');
  }
  , setupBottomNav: function(owner) {
      this.inherited(arguments);
      this.setAdminNavToolbar(owner.createComponent({kind: "onyx.Toolbar", name: 'adminNavToolbar', owner: owner}));

      /** Begin Admin navs, need a way to show/hide this*/
      this.createLinkButton(this.adminNavToolbar, 'readUserInfo', 'Read User Info');
      this.createLinkButton(this.adminNavToolbar, 'readUserList', 'Search For Users');
      this.createLinkButton(this.adminNavToolbar, 'deleteUser', 'Delete User');
  }
  , showAdminOptions: function() {
      console.log("showAdminOptions");
      if (this.adminNavToolbar) {
        this.adminNavToolbar.show();
        this.adminNavToolbar.render();
      }
    }
  , hideAdminOptions: function() {
      console.log("hideAdminOptions");
      if (this.adminNavToolbar) {
        this.adminNavToolbar.hide();
        this.adminNavToolbar.render();
      }
    }
});









