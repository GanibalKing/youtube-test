import template from './searchinput.html';
import searchinputFactory from './searchinput.factory';
import './searchinput.styl';

class searchinputController {
    constructor() {
    };

    searchVideo(root) {
        let searchinput = new searchinputFactory();
        let userinput = this.userinput;
        // getting data from user input
        let searchinputResult = new Promise((resolve, reject) => {
            searchinput.getYoutubeVideos(userinput).execute( response => resolve(response.result));
        });

        let succesSearchinputResult = (response) => {
            this.parent.result = response;
            // updating scope
            root.$apply();
        };

        let errorSearchinputResult = (error) => {
        // pseudo error handling
            console.log(error);
        };

        searchinputResult.then(succesSearchinputResult, errorSearchinputResult);
    };
};

let searchinputComponent = {
    restrict: 'E',
    bindings: {
        userinput: '@'
    },
    // grabing rootcontroller
    require: {
      parent: '^rootholder'
    },
    template,
    controller: searchinputController,
    controllerAs: 'vm'
};

export default searchinputComponent;
