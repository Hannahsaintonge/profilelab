"use strict";

function ProfileService($location) {
    let userData = {
        name: "Han San",
        contact: "yingyang@email.com",
        bio: "Code school is the best and I'm learning so much. AngularJS is pretty alright."
    };

    const getUserProfile = () => {
        return userData;
      };

      const setUserProfile = (user) => {
        userData = user; 
      };

    return {
        getUserProfile,
        setUserProfile
    };
}

angular
  .module("app")
  .factory("ProfileService", ProfileService);