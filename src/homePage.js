
const createHomepage = () => {
    const bodyContainer = document.createElement('div');
    const bodyContainerHeading = document.createElement('div');
    const bodyContainerContent = document.createElement('div');

    bodyContainerHeading.innerHTML = "The Restaurant";
    bodyContainerContent.innerHTML = "We are the restaurant";

    bodyContainer.classList.add('body-container');
    bodyContainer.classList.add('active');
    bodyContainerHeading.classList.add('heading');
    bodyContainerContent.classList.add('content');

    bodyContainer.appendChild(bodyContainerHeading);
    bodyContainer.appendChild(bodyContainerContent);

    return bodyContainer
}

export {createHomepage};