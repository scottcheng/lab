#include <stdio.h>

void swap(int &a, int &b) {
	int tmp = a;
	a = b;
	b = tmp;
}

int partition(int arr[], int start, int end) {
	int
		pivot = arr[start],
		i = start,
		j;
	for (j = i + 1; j < end; j++) {
		if (arr[j] < pivot) {
			i++;
			swap(arr[i], arr[j]);
		}
	}
	swap(arr[start], arr[i]);
	return i;
}

// sort arr[start, end)
void qsort(int arr[], int start, int end) {
	if (start < end) {
		int mid = partition(arr, start, end);
		qsort(arr, start, mid);
		qsort(arr, mid + 1, end);
	}
}

void printArr(int arr[], int len) {
	int i;
	for (i = 0; i < len; i++) {
		printf("%d ", arr[i]);
	}
	printf("\n");
}

int main() {
	int arr[10] = {6, 2, 0, 9, 8, 1, 7, 54, -23, 5};
	int i;
	printf("init:\n");
	printArr(arr, sizeof(arr) / sizeof(int));

	qsort(arr, 0, 10);

	printf("result:\n");
	printArr(arr, sizeof(arr) / sizeof(int));

	return 0;
}