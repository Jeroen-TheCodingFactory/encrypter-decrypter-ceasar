class API {
    async getData(url) {
        let dataToBeReturned = {};
        await fetch(url).then(
            (repsponse) => {
                return repsponse.json();
            }
        ).then((data) => {
            dataToBeReturned = data.data;
        });
      return dataToBeReturned;
    }
}