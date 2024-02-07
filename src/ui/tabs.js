export class Tabs {
    #tabElements;

    constructor(parentId, tabsList) {
        const parentElement = document.getElementById(parentId);

        if (!parentElement) {
            throw `wrong parentId ${parentId}`
        }
        parentElement.innerHTML = tabsList.map(e => `<button>${e}</button>`).join('');
        this.#tabElements = parentElement.querySelectorAll('button');
    }

    addTabsHandler(handlerFun) {
        this.#tabElements.forEach(e => e.addEventListener('click', () =>  {
            handlerFun(e);
            this.colorTab(e);
        }));
        
    }

    colorTab(tab) {
        this.#tabElements.forEach(e => e.style.backgroundColor = 'white');
        tab.style.backgroundColor = 'blue';
    }
}