#include<stdio.h>

void swap(int arr[], int var1, int var2){
    int temp = arr[var1];
    arr[var1] = arr[var2];
    arr[var2] = temp;
}

void print_arr(int arr[], int len){
    for (int i=0;i<len;i++){
        printf("%d ", arr[i]);
    }
}

int partition(int arr[], int start, int end){
    int i = start;
    int j = end;
    int pivot = arr[end];

    while (i < j)
    {
        while(arr[i] <= pivot && i <= end-1) i++;
        while(arr[j] > pivot && j >= start+1) j--;
        if(i < j) swap(arr, i, j);
    }
    swap(arr, end, i);
    return i;
}

void quickSort(int arr[], int start, int end){
    if(start < end){
        int partIndex = partition(arr, start, end);
        quickSort(arr, start, partIndex-1);
        quickSort(arr, partIndex+1, end);
    }
}

int main(){
    int arr[] = {10, 20, 40, 5, 90, 9, 12, 24, 45};
    int length = sizeof(arr)/sizeof(arr[0]);

    quickSort(arr, 0, length-1);

    print_arr(arr, length);
    return 0;
}