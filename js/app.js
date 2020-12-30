const $btnOpen = document.getElementById('btn-open');
const $btnClose = document.getElementById('btn-close');
const $modal = document.getElementById('modal');

function openModal() {
	$modal.classList.add('active');
}
function closeModal() {
	$modal.classList.remove('active');
}


$btnOpen.addEventListener('click', function(e) {
	openModal();
})
$btnClose.addEventListener('click', function(e) {
	closeModal();
})