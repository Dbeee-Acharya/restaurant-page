
const createHomepage = () => {
    const bodyContainer = document.createElement('div');
    const bodyContainerHeading = document.createElement('div');
    const bodyContainerContent = document.createElement('div');

    bodyContainerHeading.innerHTML = "The Restaurant";
    bodyContainerContent.innerHTML = "We are the restaurant";

    bodyContainer.classList.add('body-container');
    bodyContainerHeading.classList.add('heading');
    bodyContainerContent.classList.add('content');

    bodyContainer.appendChild(bodyContainerHeading);
    bodyContainer.appendChild(bodyContainerContent);

    return bodyContainer
}

const createMenuPage = () => {
    const bodyContainer = document.createElement('div');
    const bodyContainerHeading = document.createElement('div');
    const bodyContainerContent = document.createElement('div');

    bodyContainerHeading.innerHTML = "The Restaurant Menu";
    bodyContainerContent.innerHTML = "MENUUUUUUUUUU";

    bodyContainer.classList.add('body-container');
    bodyContainerHeading.classList.add('heading');
    bodyContainerContent.classList.add('content');

    bodyContainer.appendChild(bodyContainerHeading);
    bodyContainer.appendChild(bodyContainerContent);

    return bodyContainer
}

const createAboutPage = () => {
    const bodyContainer = document.createElement('div');
    const bodyContainerHeading = document.createElement('div');
    const bodyContainerContent = document.createElement('div');

    bodyContainerHeading.innerHTML = "ABout Ues";
    bodyContainerContent.innerHTML = "Hami ko ho???";

    bodyContainer.classList.add('body-container');
    bodyContainerHeading.classList.add('heading');
    bodyContainerContent.classList.add('content');

    bodyContainer.appendChild(bodyContainerHeading);
    bodyContainer.appendChild(bodyContainerContent);

    return bodyContainer
}

export {createHomepage, createMenuPage, createAboutPage};