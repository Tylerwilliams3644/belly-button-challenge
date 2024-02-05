
let url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

d3.json(url).then(function(data) {
    
    console.log(data);
    
    let dropdownMenu =d3.select("#selDataset");
    let samples = data.samples;

    samples.forEach(sample => {
        dropdownMenu.append("option").text(sample.id).property("value", sample.id);
    });


    function barChart(sample) {
        let trace1 = {
            x: sample.sample_values.slice(0,10).reverse(),
            y: sample.otu_ids.slice(0, 10).map(otu_id => `OTU ${otu_id}`).reverse(),
            text: sample.otu_labels.slice(0, 10).reverse(),
            type: 'bar',
            orientation: 'h'
        };

        let data = [trace1];

        Plotly.newPlot("bar", data);

    }

    barChart(samples[0]);

});
