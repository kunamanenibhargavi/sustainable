document.addEventListener('DOMContentLoaded', function() {
    const tipsList = document.getElementById('tips-list');
  
    // Sample eco-friendly tips (you can replace it with your own data)
    const tipsData = [
      { title: 'Reduce Water Waste', description: 'Turn off the tap while brushing your teeth to save water.' },
      { title: 'Use Reusable Bags', description: 'Carry reusable bags when shopping to reduce plastic waste.' },
      { title: 'Eat Less Meat', description: 'Try incorporating more plant-based meals into your diet to reduce your carbon footprint.' },
      // Add more tips as needed
    ];
  
    
    function renderTips() {
      tipsList.innerHTML = ''; 
  
      tipsData.forEach(tip => {
        const tipItem = document.createElement('div');
        tipItem.classList.add('tip');
        tipItem.innerHTML = `
          <h2>${tip.title}</h2>
          <p>${tip.description}</p>
        `;
        tipsList.appendChild(tipItem);
      });
    }
  
    
    renderTips();
  });