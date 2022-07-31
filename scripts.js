

$(() => {



    // navigation bar
    buttonContent = {
        "#home": ".homeContent", "#about": ".aboutContent", "#education": ".educationContent", "#experience": ".experienceContent",
        "#projects": ".projectsContent", "#contact": ".contactContent"
    }


    for (let i = 0; i < Object.keys(buttonContent).length; i++) {
        const key = Object.keys(buttonContent)[i]
        $(key).on("click", () => {
            $(".content").hide()
            $(buttonContent[key]).show()
            $(".button").removeClass("activeButton")
            $(key).addClass("activeButton")
        })
    }
    $(".content").hide()
    $(buttonContent["#home"]).show()
    $("#home").addClass("activeButton")

    // Lola carousel --- like example given in class

    let currentImage = 0
    let numOfImages = $(".carouselImages").children().length - 1


    $(".forward").on("click", () => {

        $(".carouselImages").children().eq(currentImage).css("display", "none")

        if (currentImage < numOfImages) {
            currentImage++
        } else {
            currentImage = 0
        }
        $(".carouselImages").children().eq(currentImage).css("display", "block")

    })

    $(".previous").on("click", () => {

        $(".carouselImages").children().eq(currentImage).css("display", "none")

        if (currentImage > 0) {
            currentImage--
        } else {
            currentImage = numOfImages
        }

        $(".carouselImages").children().eq(currentImage).css("display", "block")


    })

    $(".carouselImages").children().eq(0).show()

    // Dark mode toggle button

    $("#darkModeCheckBox").on("click", () => {

        if ($("#darkModeCheckBox").prop("checked")) {
            $("#body").addClass("darkMode")
            $("#moon").addClass("fa-solid").removeClass("fa-regular")
        }
        else {
            $("#body").removeClass("darkMode")
            $("#moon").addClass("fa-regular").removeClass("fa-solid")
        }

    })






})

