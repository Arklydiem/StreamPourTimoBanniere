document.addEventListener('goalLoad', (obj) => {
    console.log(obj.detail);
    updateGoalContent(obj.detail);
});

document.addEventListener('goalEvent', (obj) => {
    updateGoalContent(obj.detail);
});

function updateGoalContent(detail) {
    const percent = (((detail.amount.current + 75) / detail.amount.target) * 100).toFixed(2);

    var montant = parseFloat(detail.amount.current) + 75;
    document.getElementById('current-amount').textContent = montant + " €";
    document.getElementById('goal-title').textContent = detail.title;
    let value = Number(detail.amount.target);
    let formatted = value.toLocaleString("fr-FR", { maximumFractionDigits: 0 });
    document.getElementById('target-amount').textContent = formatted + " €";
    const bar = document.getElementById('progress-bar');
    bar.style.width = `${percent}%`;
}