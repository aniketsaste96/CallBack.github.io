



function NowStart() {
    let ten = function (callback) {
        document.getElementById("Numbers").innerHTML = "10";
        setTimeout(() => {

            callback();
        }, 500)
    }


    let nine = function (callback) {

        setTimeout(() => {
            document.getElementById("Numbers").innerHTML = "9";
            callback();
        }, 1000)
    }

    let eight = function (callback) {


        setTimeout(() => {
            document.getElementById("Numbers").innerHTML = "8";
            callback();
        }, 1000)
    }



    let seven = function (callback) {

        setTimeout(() => {
            document.getElementById("Numbers").innerHTML = "7";
            callback();
        }, 1000)

    }

    let six = function (callback) {

        setTimeout(() => {
            document.getElementById("Numbers").innerHTML = "6";
            callback();
        }, 1000)

    }


    let five = function (callback) {

        setTimeout(() => {
            document.getElementById("Numbers").innerHTML = "5";
            callback();
        }, 1000)

    }

    let four = function (callback) {

        setTimeout(() => {
            document.getElementById("Numbers").innerHTML = "4";
            callback();
        }, 1000)

    }
    let three = function (callback) {

        setTimeout(() => {
            document.getElementById("Numbers").innerHTML = "3";
            callback();
        }, 1000)

    }
    let two = function (callback) {

        setTimeout(() => {
            document.getElementById("Numbers").innerHTML = "2";
            callback();
        }, 1000)

    }
    let one = function (callback) {

        setTimeout(() => {
            document.getElementById("Numbers").innerHTML = "1";
            callback();
        }, 1000)

    }



    let tagLine = function (callback) {

        setTimeout(() => {
            document.getElementById("Numbers").innerHTML = "Happy Independence Day";


            callback();
        }, 1000)

    }




    ten(() => {
        nine(() => {
            eight(() => {
                seven(() => {
                    six(() => {
                        five(() => {
                            four(() => {
                                three(() => {
                                    two(() => {
                                        one(() => {

                                            tagLine(() => {

                                            })

                                        })
                                    })
                                })
                            })
                        })

                    })

                })

            })



        })
    });

};



