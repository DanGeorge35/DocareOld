# Docare
## Setup
 Create react-native.config.js  at the root 
------------------ Content --------------------------------------
module.exports = {
    project:{
        android:{},
        ios:{}
    },
    assets: ['./assets/fonts']
}
add this to the file  android/app/build.gradle (NOT android/build.gradle) and add:

apply from: file("../../node_modules/react-native-vector-icons/fonts.gradle")
 
 navigate to android by cd android run
 ./gradlew clean to clean android

------------------------------------------------------------------

To generate Release version of the Apk
---------------------------------------------------
./gradlew assembleRelease
---------------------------------------------------