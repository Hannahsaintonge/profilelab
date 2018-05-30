"use strict";

const editProfile = {
  template: `
  <form ng-submit="$ctrl.editProfile($ctrl.user)">
  <input type="text" ng-model="$ctrl.user.name">
  <input type="text" rows="4" ng-model="$ctrl.user.contact">
  <input class="bio" type="text" ng-model="$ctrl.user.bio">
  <br>
  <a class="profileBtn" href="#!/profile">Update</a>
  </form>
  `,

  controller: ["ProfileService", function(ProfileService) {
      const vm = this;
      vm.user = angular.copy(ProfileService.getUserProfile());
      vm.signUp = (user) => {
          console.log(user);
          ProfileService.setUserProfile(user);
      }
  }]
};

angular
  .module("app")
  .component("editProfile", editProfile);