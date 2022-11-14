if (document.querySelector('.multiselect')) {
    new Choices('.multiselect', {
        allowHTML: true,
        placeholderValue: 'Выберите услуги',
        removeItemButton: true,
        searchFloor: 1,
        itemSelectText: 'Нажмите, чтобы выбрать',
        noResultsText: 'Ничего не найдено',
    });
}

