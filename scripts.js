

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
    const carouselItems = document.getElementsByClassName("carouselImages")[0].children

    const hideAll = () => {
        console.log(carouselItems)
        for(let i = 0; i < carouselItems.length; i++) {
            carouselItems[i].children[0].style.display = "none"
        }
    }

    const showCurrentImage = () => {
        carouselItems[currentImage].children[0].style.display = "block"
    }

    $(".forward").on("click", () => {
        hideAll()
        if (currentImage < numOfImages) {
            currentImage++
        } else {
            currentImage = 0
        }
        showCurrentImage()
    })

    $(".previous").on("click", () => {
        hideAll()
        if (currentImage > 0) {
            currentImage--
        } else {
            currentImage = numOfImages
        }
        showCurrentImage()
    })

    hideAll()
    showCurrentImage()

    // Dark mode toggle button
    $("#darkModeCheckBox").on("click", () => {

        if ($("#darkModeCheckBox").prop("checked")) {
            $("#body").addClass("darkMode")
            $("#email").addClass("emailDarkMode")
            $("#moon").addClass("fa-solid").removeClass("fa-regular")
        }
        else {
            $("#body").removeClass("darkMode")
            $("#moon").addClass("fa-regular").removeClass("fa-solid")
            $("#email").removeClass("emailDarkMode")
        }

    })






})

