
const createHomepage = () => {
    const bodyContainer = document.createElement('div');
    bodyContainer.innerHtml = "TEST"
    bodyContainer.classList.add('body-container');
    // const bodyContainerHeading = document.createElement('div').classList.add('heading');
    // const bodyContainerContent = document.createElement('div').classList.add('content');

    // bodyContainerHeading.innerHTML = "The Restaurant";
    // bodyContainerContent.innerHTML = "We are the restaurant";

    // bodyContainer.appendChild(bodyContainerHeading);
    // bodyContainer.appendChild(bodyContainerContent);

    return bodyContainer
}

export {createHomepage};