function isAdjacent(here,there){
	if (here == 0){
		if (there == 1 || there == 3){
			return true;	
		}
	}else if (here == 1){
		if (there == 0 || there == 4){
			return true;	
		}
	}else if (here == 2){
		if (there == 7 || there == 3){
			return true;	
		}
	}else if (here == 3){
		if (there == 0 || there == 2 || there == 8){
			return true;	
		}
	}else if (here == 4){
		if (there == 1 || there == 5 || there == 9){
			return true;	
		}
	}else if (here == 5){
		if (there == 4 || there == 10){
			return true;	
		}
	}else if (here == 6){
		if (there == 7 || there == 12){
			return true;	
		}
	}else if (here == 7){
		if (there == 2 || there == 6 || there == 13){
			return true;	
		}
	}else if (here == 8){
		if (there == 3 || there == 9 || there == 14){
			return true;	
		}
	}else if (here == 9){
		if (there == 4 || there == 8 || there == 15){
			return true;	
		}
	}else if (here == 10){
		if (there == 5 || there == 11 || there == 16){
			return true;	
		}
	}else if (here == 11){
		if (there == 10 || there == 17){
			return true;	
		}
	}else if (here == 12){
		if (there == 6 || there == 18){
			return true;	
		}
	}else if (here == 13){
		if (there == 7 || there == 14 || there == 19){
			return true;	
		}
	}else if (here == 14){
		if (there == 8 || there == 13 || there == 20){
			return true;	
		}
	}else if (here == 15){
		if (there == 9 || there == 16 || there == 21){
			return true;	
		}
	}else if (here == 16){
		if (there == 10 || there == 15 || there == 22){
			return true;	
		}
	}else if (here == 17){
		if (there == 11 || there == 23){
			return true;	
		}
	}else if (here == 18){
		if (there == 12 || there == 19 || there == 24){
			return true;	
		}
	}else if (here == 19){
		if (there == 13 || there == 18 || there == 25){
			return true;
		}
	}else if (here == 20){
		if (there == 14 || there == 21 || there == 26){
			return true;	
		}
	}else if (here == 21){
		if (there == 15 || there == 20 || there == 27){
			return true;	
		}
	}else if (here == 22){
		if (there == 16 || there == 23 || there == 28){
			return true;	
		}
	}else if (here == 23){
		if (there == 17 || there == 22 || there == 29){
			return true;	
		}
	}else if (here == 24){
		if (there == 18 || there == 30){
			return true;	
		}
	}else if (here == 25){
		if (there == 19 || there == 26 || there == 31){
			return true;	
		}
	}else if (here == 26){
		if (there == 20 || there == 25 || there == 32){
			return true;	
		}
	}else if (here == 27){
		if (there == 21 || there == 28 || there == 33){
			return true;	
		}
	}else if (here == 28){
		if (there == 22 || there == 27 || there == 34){
			return true;	
		}
	}else if (here == 29){
		if (there == 23 || there == 35){
			return true;
		}
	}else if (here == 30){
		if (there == 24 || there == 31 || there == 36){
			return true;	
		}
	}else if (here == 31){
		if (there == 25 || there == 30 || there == 37){
			return true;	
		}
	}else if (here == 32){
		if (there == 26 || there == 33 || there == 38){
			return true;	
		}
	}else if (here == 33){
		if (there == 27 || there == 32 || there == 39){
			return true;	
		}
	}else if (here == 34){
		if (there == 28 || there == 35 || there == 40){
			return true;	
		}
	}else if (here == 35){
		if (there == 29 || there == 34 || there == 41){
			return true;	
		}
	}else if (here == 36){
		if (there == 30 || there == 42){
			return true;	
		}
	}else if (here == 37){
		if (there == 31 || there == 38 || there == 43){
			return true;	
		}
	}else if (here == 38){
		if (there == 32 || there == 37 || there == 44){
			return true;	
		}
	}else if (here == 39){
		if (there == 33 || there == 40 || there == 45){
			return true;	
		}
	}else if (here == 40){
		if (there == 34 || there == 39 || there == 46){
			return true;	
		}
	}else if (here == 41){
		if (there == 35 || there == 47){
			return true;	
		}
	}else if (here == 42){
		if (there == 36 || there == 43){
			return true;	
		}
	}else if (here == 43){
		if (there == 37 || there == 42 || there == 48){
			return true;	
		}
	}else if (here == 44){
		if (there == 38 || there == 45 || there == 49){
			return true;	
		}
	}else if (here == 45){
		if (there == 39 || there == 44 || there == 50){
			return true;	
		}
	}else if (here == 46){
		if (there == 40 || there == 47 || there == 51){
			return true;	
		}
	}else if (here == 47){
		if (there == 41 || there == 46){
			return true;	
		}
	}else if (here == 48){
		if (there == 43 || there == 49){
			return true;	
		}
	}else if (here == 49){
		if (there == 44 || there == 48 || there == 52){
			return true;	
		}
	}else if (here == 50){
		if (there == 45 || there == 51 || there == 53){
			return true;	
		}
	}else if (here == 51){
		if (there == 46 || there == 50){
			return true;	
		}
	}else if (here == 52){
		if (there == 49 || there == 53){
			return true;	
		}
	}else if (here == 53){
		if (there == 50 || there == 52){
			return true;	
		}
	}else{
		return false;
	}
}

function settlementAdjacentToSettlement(here){
	if (here == 0){
		return [1,3];	
	}else if (here == 1){
		return [0,4];
	}else if (here == 2){
		return [7,3];	
	}else if (here == 3){
		return [0,2,8];	
	}else if (here == 4){
		return [1,5,9];	
	}else if (here == 5){
		return [4,10];	
	}else if (here == 6){
		return [7,12];	
	}else if (here == 7){
		return [2,6,13];	
	}else if (here == 8){
		return [3,9,14];	
	}else if (here == 9){
		return [4,8,15];	
	}else if (here == 10){
		return [5,11,16];	
	}else if (here == 11){
		return [10,17];	
	}else if (here == 12){
		return [6,18];	
	}else if (here == 13){
		return [7,14,19];	
	}else if (here == 14){
		return [8,13,20];	
	}else if (here == 15){
		return [9,16,21];	
	}else if (here == 16){
		return [10,15,22];	
	}else if (here == 17){
		return [11,23];	
	}else if (here == 18){
		return [12,19,24];	
	}else if (here == 19){
		return [13,18,25];
	}else if (here == 20){
		return [14,21,26];	
	}else if (here == 21){
		return [15,20,27];	
	}else if (here == 22){
		return [16,23,28];	
	}else if (here == 23){
		return [17,22,29];	
	}else if (here == 24){
		return [18,30];	
	}else if (here == 25){
		return [19,26,31];	
	}else if (here == 26){
		return [20,25,32];	
	}else if (here == 27){
		return [21,28,33];	
	}else if (here == 28){
		return [22,27,34];	
	}else if (here == 29){
		return [23,35];
	}else if (here == 30){
		return [24,31,36];	
	}else if (here == 31){
		return [25,30,37];	
	}else if (here == 32){
		return [26,33,38];	
	}else if (here == 33){
		return [27,32,39];	
	}else if (here == 34){
		return [28,35,40];	
	}else if (here == 35){
		return [29,34,41];	
	}else if (here == 36){
		return [30,42];	
	}else if (here == 37){
		return [31,38,43];	
	}else if (here == 38){
		return [32,37,44];	
	}else if (here == 39){
		return [33,40,45];	
	}else if (here == 40){
		return [34,39,46];	
	}else if (here == 41){
		return [35,47];	
	}else if (here == 42){
		return [36,43];	
	}else if (here == 43){
		return [37,42,48];	
	}else if (here == 44){
		return [38,45,49];	
	}else if (here == 45){
		return [39,44,50];	
	}else if (here == 46){
		return [40,47,51];	
	}else if (here == 47){
		return [41,46];	
	}else if (here == 48){
		return [43,49];	
	}else if (here == 49){
		return [44,48,52];	
	}else if (here == 50){
		return [45,51,53];	
	}else if (here == 51){
		return [46,50];	
	}else if (here == 52){
		return [49,53];	
	}else if (here == 53){
		return [50,52];	
	}
}

function roadAdjacentToSettlement(here){
	if (here == 0){
		return [0,1];	
	}else if (here == 1){
		return [1,2];
	}else if (here == 2){
		return [3,4];	
	}else if (here == 3){
		return [0,4,5];	
	}else if (here == 4){
		return [2,6,7];
	}else if (here == 5){
		return [7,8];	
	}else if (here == 6){
		return [9,10];	
	}else if (here == 7){
		return [3,10,11];	
	}else if (here == 8){
		return [5,12,13];	
	}else if (here == 9){
		return [6,13,14];	
	}else if (here == 10){
		return [8,15,16];	
	}else if (here == 11){
		return [16,17];	
	}else if (here == 12){
		return [9,18];	
	}else if (here == 13){
		return [11,19,20];	
	}else if (here == 14){
		return [12,20,21];	
	}else if (here == 15){
		return [14,22,23];	
	}else if (here == 16){
		return [15,23,24];	
	}else if (here == 17){
		return [17,25];	
	}else if (here == 18){
		return [18,26,27];	
	}else if (here == 19){
		return [19,27,28];
	}else if (here == 20){
		return [21,29,30];	
	}else if (here == 21){
		return [22,30,31];	
	}else if (here == 22){
		return [24,32,33];	
	}else if (here == 23){
		return [25,33,34];	
	}else if (here == 24){
		return [26,35];	
	}else if (here == 25){
		return [28,36,37];	
	}else if (here == 26){
		return [29,37,38];	
	}else if (here == 27){
		return [31,39,40];	
	}else if (here == 28){
		return [32,40,41];	
	}else if (here == 29){
		return [34,42];
	}else if (here == 30){
		return [35,43,44];	
	}else if (here == 31){
		return [36,44,45];	
	}else if (here == 32){
		return [38,46,47];	
	}else if (here == 33){
		return [39,47,48];	
	}else if (here == 34){
		return [41,49,50];	
	}else if (here == 35){
		return [42,50,51];	
	}else if (here == 36){
		return [43,52];	
	}else if (here == 37){
		return [45,53,54];	
	}else if (here == 38){
		return [46,54,55];	
	}else if (here == 39){
		return [48,56,57];	
	}else if (here == 40){
		return [49,57,58];	
	}else if (here == 41){
		return [51,59];	
	}else if (here == 42){
		return [52,60];	
	}else if (here == 43){
		return [53,60,61];	
	}else if (here == 44){
		return [55,62,63];	
	}else if (here == 45){
		return [56,63,64];	
	}else if (here == 46){
		return [58,65,66];	
	}else if (here == 47){
		return [59,66];	
	}else if (here == 48){
		return [61,67];	
	}else if (here == 49){
		return [62,67,68];	
	}else if (here == 50){
		return [64,69,70];	
	}else if (here == 51){
		return [65,70];	
	}else if (here == 52){
		return [68,71];	
	}else if (here == 53){
		return [69,71];	
	}
}

function settlementAdjacentToRoad(here){
	if (here == 0){
		return [0,3];	
	}else if (here == 1){
		return [0,1];
	}else if (here == 2){
		return [1,4];	
	}else if (here == 3){
		return [2,7];
	}else if (here == 4){
		return [2,3];
	}else if (here == 5){
		return [3,8];
	}else if (here == 6){
		return [4,9];
	}else if (here == 7){
		return [4,5];
	}else if (here == 8){
		return [5,10];
	}else if (here == 9){
		return [6,12];
	}else if (here == 10){
		return [6,7];
	}else if (here == 11){
		return [7,13];
	}else if (here == 12){
		return [8,14];
	}else if (here == 13){
		return [8,9];
	}else if (here == 14){
		return [9,15];
	}else if (here == 15){
		return [10,16];	
	}else if (here == 16){
		return [10,11];
	}else if (here == 17){
		return [11,17];
	}else if (here == 18){
		return [12,18];
	}else if (here == 19){
		return [13,19];
	}else if (here == 20){
		return [13,14];
	}else if (here == 21){
		return [14,20];
	}else if (here == 22){
		return [15,21];
	}else if (here == 23){
		return [15,16];
	}else if (here == 24){
		return [16,22];
	}else if (here == 25){
		return [17,23];
	}else if (here == 26){
		return [18,24];
	}else if (here == 27){
		return [18,19];
	}else if (here == 28){
		return [19,25];
	}else if (here == 29){
		return [20,26];
	}else if (here == 30){
		return [20,21];
	}else if (here == 31){
		return [21,27];
	}else if (here == 32){
		return [22,28];
	}else if (here == 33){
		return [22,23];
	}else if (here == 34){
		return [23,29];
	}else if (here == 35){
		return [24,30];
	}else if (here == 36){
		return [25,31];
	}else if (here == 37){
		return [25,26];
	}else if (here == 38){
		return [26,32];
	}else if (here == 39){
		return [27,33];
	}else if (here == 40){
		return [27,28];
	}else if (here == 41){
		return [28,34];
	}else if (here == 42){
		return [29,35];
	}else if (here == 43){
		return [30,36];
	}else if (here == 44){
		return [30,31];
	}else if (here == 45){
		return [31,37];
	}else if (here == 46){
		return [32,38];
	}else if (here == 47){
		return [32,33];
	}else if (here == 48){
		return [33,39];
	}else if (here == 49){
		return [34,40];
	}else if (here == 50){
		return [34,35];
	}else if (here == 51){
		return [35,41];
	}else if (here == 52){
		return [36,42];
	}else if (here == 53){
		return [37,43];
	}else if (here == 54){
		return [37,38];
	}else if (here == 55){
		return [38,44];
	}else if (here == 56){
		return [39,45];
	}else if (here == 57){
		return [39,40];
	}else if (here == 58){
		return [40,46];
	}else if (here == 59){
		return [41,47];
	}else if (here == 60){
		return [42,43];
	}else if (here == 61){
		return [43,48];
	}else if (here == 62){
		return [44,49];
	}else if (here == 63){
		return [44,45];
	}else if (here == 64){
		return [45,50];
	}else if (here == 65){
		return [46,51];
	}else if (here == 66){
		return [46,47];
	}else if (here == 67){
		return [48,49];
	}else if (here == 68){
		return [49,52];
	}else if (here == 69){
		return [50,53];
	}else if (here == 70){
		return [50,51];
	}else if (here == 71){
		return [52,53];
	}
}

function roadAdjacentToRoad(here){
	if (here == 0){
		return [1,4,5];	
	}else if (here == 1){
		return [0,2];
	}else if (here == 2){
		return [1,7];	
	}else if (here == 3){
		return [4,10,11];	
	}else if (here == 4){
		return [0,3,5];
	}else if (here == 5){
		return [0,4,12,13];	
	}else if (here == 6){
		return [2,7,13,14];	
	}else if (here == 7){
		return [2,6,8];	
	}else if (here == 8){
		return [7,15,16];	
	}else if (here == 9){
		return [10,18];	
	}else if (here == 10){
		return [3,9,11];	
	}else if (here == 11){
		return [3,10,19,20];	
	}else if (here == 12){
		return [5,13,20,21];	
	}else if (here == 13){
		return [5,6,12,14];	
	}else if (here == 14){
		return [6,13,22,23];	
	}else if (here == 15){
		return [8,16,23,24];	
	}else if (here == 16){
		return [8,15,17];	
	}else if (here == 17){
		return [16,25];	
	}else if (here == 18){
		return [9,26,27];	
	}else if (here == 19){
		return [11,20,27,28];
	}else if (here == 20){
		return [11,12,19,21];	
	}else if (here == 21){
		return [12,20,29,30];
	}else if (here == 22){
		return [14,23,30,31];	
	}else if (here == 23){
		return [14,15,22,24];
	}else if (here == 24){
		return [15,23,32,33];	
	}else if (here == 25){
		return [17,33,34];
	}else if (here == 26){
		return [18,27,35];
	}else if (here == 27){
		return [18,19,26,28];	
	}else if (here == 28){
		return [19,27,36,37];	
	}else if (here == 29){
		return [21,30,37,38];
	}else if (here == 30){
		return [21,22,29,31];
	}else if (here == 31){
		return [22,30,39,40];
	}else if (here == 32){
		return [24,33,40,41];
	}else if (here == 33){
		return [24,25,32,34];
	}else if (here == 34){
		return [25,33,42];
	}else if (here == 35){
		return [26,43,44];
	}else if (here == 36){
		return [28,37,44,45];
	}else if (here == 37){
		return [28,29,36,38];
	}else if (here == 38){
		return [29,37,46,47];
	}else if (here == 39){
		return [31,40,47,48];
	}else if (here == 40){
		return [31,32,39,41];
	}else if (here == 41){
		return [32,40,49,50];
	}else if (here == 42){
		return [34,50,51];
	}else if (here == 43){
		return [35,44,52];
	}else if (here == 44){
		return [35,36,43,45];
	}else if (here == 45){
		return [36,44,53,54];
	}else if (here == 46){
		return [38,47,54,55];
	}else if (here == 47){
		return [38,39,46,48];
	}else if (here == 48){
		return [39,47,56,57];
	}else if (here == 49){
		return [41,50,57,58];
	}else if (here == 50){
		return [41,42,49,51];
	}else if (here == 51){
		return [42,50,59];
	}else if (here == 52){
		return [43,60];
	}else if (here == 53){
		return [45,54,60,61];
	}else if (here == 54){
		return [45,46,53,55];
	}else if (here == 55){
		return [46,54,62,63];
	}else if (here == 56){
		return [48,57,63,64];
	}else if (here == 57){
		return [48,49,56,58];
	}else if (here == 58){
		return [49,57,65,66];
	}else if (here == 59){
		return [51,66];
	}else if (here == 60){
		return [52,53,61];
	}else if (here == 61){
		return [53,60,67];
	}else if (here == 62){
		return [55,63,67,68];
	}else if (here == 63){
		return [55,56,62,64];
	}else if (here == 64){
		return [56,63,69,70];
	}else if (here == 65){
		return [58,66,70];
	}else if (here == 66){
		return [58,59,65];
	}else if (here == 67){
		return [61,62,68];
	}else if (here == 68){
		return [62,67,71];
	}else if (here == 69){
		return [64,70,71];
	}else if (here == 70){
		return [64,65,69];
	}else if (here == 71){
		return [68,69];
	}
}

function terrainAdjacentToSettlement(here){
	if (here == 0){
		return [6,7,12,13,18,19];
	}else if (here == 1){
		return [2,3,7,8,13,14];
	}else if (here == 2){
		return [0,1,3,4,8,9];
	}else if (here == 3){
		return [18,19,24,25,30,31];
	}else if (here == 4){
		return [13,14,19,20,25,26];
	}else if (here == 5){
		return [8,9,14,15,20,21];
	}else if (here == 6){
		return [4,5,9,10,15,16];
	}else if (here == 7){
		return [30,31,36,37,42,43];
	}else if (here == 8){
		return [25,26,31,32,37,38];
	}else if (here == 9){
		return [20,21,26,27,32,33];
	}else if (here == 10){
		return [15,16,21,22,27,28];
	}else if (here == 11){
		return [10,11,16,17,22,23];
	}else if (here == 12){
		return [37,38,43,44,48,49];
	}else if (here == 13){
		return [32,33,38,39,44,45];
	}else if (here == 14){
		return [27,28,33,34,39,40];
	}else if (here == 15){
		return [22,23,28,29,34,35];
	}else if (here == 16){
		return [44,45,49,50,52,53];
	}else if (here == 17){
		return [39,40,45,46,50,51];
	}else if (here == 18){
		return [34,35,40,41,46,47];
	}
}

function settlementAdjacentToTerrain(here){
	if (here == 0){
		return [2];
	}else if (here == 1){
		return [2];
	}else if (here == 2){
		return [1];
	}else if (here == 3){
		return [1,2];
	}else if (here == 4){
		return [2,6];
	}else if (here == 5){
		return [6];
	}else if (here == 6){
		return [0];
	}else if (here == 7){
		return [0,1];
	}else if (here == 8){
		return [1,2,5];
	}else if (here == 9){
		return [2,5,6];
	}else if (here == 10){
		return [6,11];
	}else if (here == 11){
		return [11];
	}else if (here == 12){
		return [0];
	}else if (here == 13){
		return [0,1,4];
	}else if (here == 14){
		return [1,4,5];
	}else if (here == 15){
		return [5,6,10];
	}else if (here == 16){
		return [6,10,11];
	}else if (here == 17){
		return [11];
	}else if (here == 18){
		return [0,3];
	}else if (here == 19){
		return [0,3,4];
	}else if (here == 20){
		return [4,5,9];
	}else if (here == 21){
		return [5,9,10];
	}else if (here == 22){
		return [10,11,15];
	}else if (here == 23){
		return [11,15];
	}else if (here == 24){
		return [3];
	}else if (here == 25){
		return [3,4,8];
	}else if (here == 26){
		return [4,8,9];
	}else if (here == 27){
		return [9,10,14];
	}else if (here == 28){
		return [10,14,15];
	}else if (here == 29){
		return [15];
	}else if (here == 30){
		return [3,7];
	}else if (here == 31){
		return [3,7,8];
	}else if (here == 32){
		return [8,9,13];
	}else if (here == 33){
		return [9,13,14];
	}else if (here == 34){
		return [14,15,18];
	}else if (here == 35){
		return [15,18];
	}else if (here == 36){
		return [7];
	}else if (here == 37){
		return [7,8,12];
	}else if (here == 38){
		return [8,12,13];
	}else if (here == 39){
		return [13,14,17];
	}else if (here == 40){
		return [14,17,18];
	}else if (here == 41){
		return [18];
	}else if (here == 42){
		return [7];
	}else if (here == 43){
		return [7,12];
	}else if (here == 44){
		return [12,13,16];
	}else if (here == 45){
		return [13,16,17];
	}else if (here == 46){
		return [17,18];
	}else if (here == 47){
		return [18];
	}else if (here == 48){
		return [12];
	}else if (here == 49){
		return [12,16];
	}else if (here == 50){
		return [16,17];
	}else if (here == 51){
		return [17];
	}else if (here == 52){
		return [16];
	}else if (here == 53){
		return [16];
	}
}