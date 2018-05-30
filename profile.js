"use strict";

const profile = {
    template:`
    <section class="profile">
    <h2>{{ $ctrl.userData.name }}</h2>
    <p>{{ $ctrl.userData.contact }}</p>
    <p>{{ $ctrl.userData.bio }}</p>
    <a class="editProfileBtn" href="#!/edit-profile">Edit</a> 
    </section>
    `,

    controller:[ "ProfileService", function(ProfileService) {
      const vm = this;
      vm.userData = ProfileService.getUserProfile();
    }]
};

angular
  .module("app")
  .component("profile", profile);