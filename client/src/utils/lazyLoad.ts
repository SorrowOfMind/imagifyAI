import {lazy} from "React"

function lazyLoad(path: string, namedExport: string) {
    return lazy(() => {
        const promise = import(path);
        if (namedExport == null) {
            return promise;
        } else {
            return promise.then(module => ({default: module[namedExport]}));
        }
    });
}

export default lazyLoad;