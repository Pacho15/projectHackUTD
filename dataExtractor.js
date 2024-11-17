// Important modules
import Papa from 'papaparse';

// Function to parse the data from CSV files
const processCSV = async (csvFiles) => {
    if (csvFiles.length !== 2) {
        throw new Error('Please provide only two CSV files.');
    }

    // Manufacturer data storage struct for 2 manufacturers
    const manufacturerData = {
        manufacturer1: {
            2021: { cityMPG: [], hwyMPG: [], combinedMPG: [], fuelCost: [] },
            2022: { cityMPG: [], hwyMPG: [], combinedMPG: [], fuelCost: [] },
            2023: { cityMPG: [], hwyMPG: [], combinedMPG: [], fuelCost: [] },
            2024: { cityMPG: [], hwyMPG: [], combinedMPG: [], fuelCost: [] },
            2025: { cityMPG: [], hwyMPG: [], combinedMPG: [], fuelCost: [] },
        },
        manufacturer2: {
            2021: { cityMPG: [], hwyMPG: [], combinedMPG: [], fuelCost: [] },
            2022: { cityMPG: [], hwyMPG: [], combinedMPG: [], fuelCost: [] },
            2023: { cityMPG: [], hwyMPG: [], combinedMPG: [], fuelCost: [] },
            2024: { cityMPG: [], hwyMPG: [], combinedMPG: [], fuelCost: [] },
            2025: { cityMPG: [], hwyMPG: [], combinedMPG: [], fuelCost: [] },
        }
    };

    // Parse each CSV file
    for (let i = 0; i < csvFiles.length; i++) {
        const manufacturer = i === 0 ? 'manufacturer1' : 'manufacturer2';
        await new Promise((resolve) => {
            Papa.parse(csvFiles[i], {
                download: true,
                header: false,
                complete: (result) => {
                    result.data.forEach((row) => {
                        const year = parseInt(row[0], 10);
                        const cityMPG = parseFloat(row[1]);
                        const hwyMPG = parseFloat(row[2]);
                        const combinedMPG = parseFloat(row[3]);
                        const fuelCost = parseFloat(row[4]);

                        if (manufacturerData[manufacturer][year]) {
                            manufacturerData[manufacturer][year].cityMPG.push(cityMPG);
                            manufacturerData[manufacturer][year].hwyMPG.push(hwyMPG);
                            manufacturerData[manufacturer][year].combinedMPG.push(combinedMPG);
                            manufacturerData[manufacturer][year].fuelCost.push(fuelCost);
                        }
                    });
                    resolve();
                },
                error: (error) => {
                    console.error('Error parsing CSV:', error);
                    resolve();
                }
            });
        });
    }

    // Create arrays for each manufacturer and respective metric
    const manufacturer1Arrays = {
        cityArray: [],
        hwyArray: [],
        combinedArray: [],
        fuelCostArray: [],
    };
    const manufacturer2Arrays = {
        cityArray: [],
        hwyArray: [],
        combinedArray: [],
        fuelCostArray: [],
    };

    // Populate the arrays with data
    for (const year of ['2021', '2022', '2023', '2024', '2025']) {
        manufacturer1Arrays.cityArray.push(...manufacturerData.manufacturer1[year].cityMPG);
        manufacturer1Arrays.hwyArray.push(...manufacturerData.manufacturer1[year].hwyMPG);
        manufacturer1Arrays.combinedArray.push(...manufacturerData.manufacturer1[year].combinedMPG);
        manufacturer1Arrays.fuelCostArray.push(...manufacturerData.manufacturer1[year].fuelCost);

        manufacturer2Arrays.cityArray.push(...manufacturerData.manufacturer2[year].cityMPG);
        manufacturer2Arrays.hwyArray.push(...manufacturerData.manufacturer2[year].hwyMPG);
        manufacturer2Arrays.combinedArray.push(...manufacturerData.manufacturer2[year].combinedMPG);
        manufacturer2Arrays.fuelCostArray.push(...manufacturerData.manufacturer2[year].fuelCost);
    }

    /*
    console.log('Manufacturer 1 City MPG:', manufacturer1Arrays.cityArray);
    console.log('Manufacturer 1 Highway MPG:', manufacturer1Arrays.hwyArray);
    console.log('Manufacturer 1 Combined MPG:', manufacturer1Arrays.combinedArray);
    console.log('Manufacturer 1 Fuel Cost:', manufacturer1Arrays.fuelCostArray);

    console.log('Manufacturer 2 City MPG:', manufacturer2Arrays.cityArray);
    console.log('Manufacturer 2 Highway MPG:', manufacturer2Arrays.hwyArray);
    console.log('Manufacturer 2 Combined MPG:', manufacturer2Arrays.combinedArray);
    console.log('Manufacturer 2 Fuel Cost:', manufacturer2Arrays.fuelCostArray);
    */
};
