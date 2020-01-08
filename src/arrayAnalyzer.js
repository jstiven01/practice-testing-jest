const arrayAnalyzer = (()=> {

    const analysis = {
        average: 0,
        min: 0,
        max: 0,
        length: 0,
    }

    const average = (arrayNumbers) => {
        analysis.average = arrayNumbers.reduce( ( p, c ) => p + c, 0 ) / arrayNumbers.length
    }

    const min = (arrayNumbers) => {
        analysis.min = Math.min(...arrayNumbers);
    }

    const max = (arrayNumbers) => {
        analysis.max = Math.max(...arrayNumbers);
    }

    const length = (arrayNumbers) => {
        analysis.length = arrayNumbers.length;
    }

    
    const analyze = (arrayNumbers) => {
        average(arrayNumbers);
        min(arrayNumbers);
        max(arrayNumbers);
        length(arrayNumbers);
        return analysis;

    }

    return {
        analyze,
    }
})();
export default arrayAnalyzer;