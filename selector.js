export async function selectMaker(optionValue,name){
    let select = document.createElement('select');
    document.body.append(select);
        optionValue.map(value=>{
            let option = document.createElement('option');
            option.textContent = value
            select.append(option);
        })

    select.addEventListener('change',()=>{
        let oldURL = new URL(window.location.href);
        let selectOldURL = oldURL.searchParams;
        selectOldURL.set('limit',select.value)
        let newURL = selectOldURL.toString();
        window.location.href =`${name}?${newURL}`;
      })
}