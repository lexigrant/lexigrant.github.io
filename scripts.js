

$(() => {
   



buttonContent = {
    "#home": ".homeContent", "#about": ".aboutContent", "#education": ".educationContent", "#experience": ".experienceContent",
    "#projects": ".projectsContent", "#contact": ".contactContent"
}


for(let i = 0; i < Object.keys(buttonContent).length; i++) {
    const key = Object.keys(buttonContent)[i]
    $(key).on("click",() => {
        $(".content").hide()
         $(buttonContent[key]).show()
    }) 
}

$(".content").hide()
$(buttonContent["#home"]).show()

})

