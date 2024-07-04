let puzzleSpecs = [
/*
	{
		number: "Bo1",
		publishedOn: "dd Mmm 24",
		dispenserSpec: [undefined, "sqp","pt", "pr", "uq"],
		matrixSpec: [9, 8, 7, -2, -1, 6, -3, -4, 5],
		colourSpec: ["Blue", "Green", "Orange", "bbGGbbGG", "OOOOGGGG", "BBBGBGGG"],
		hintSpec: ["Blue", 2],
		solutionDispenseSequence: [1, 3, 2, 1, 4, 1, 4, 2, 3],
		solutionColourSequence: ["Blue", "Blue", "BBBGBGGG", "Orange", "Blue", "bbGGbbGG", "OOOOGGGG", "Green", "Green"]
	},

	{
		number: "Z1",
		publishedOn: "dd Mmm 24",
		dispenserSpec: [undefined, "ppqpq","qpqp"],
		matrixSpec: [-1, -2, -3, 8, -4, 9, 5, 6, 7],
		colourSpec: ["Black", "Green"],
		hintSpec: ["Green", 2],
		solutionDispenseSequence: [1, 1, 2, 1, 2, 1, 2, 2, 1],
		solutionColourSequence: ["Green", "Black", "Black", "Green", "Green", "Black", "Green", "Black", "Black"]
	},
*/
	{
		number: "Gf2",
		publishedOn: "4 Jul 24",
		dispenserSpec: [undefined, "q", "sps", "qpprr"],
		matrixSpec: [-1, -4, 7, 6, 9, -2, -3, 8, 5],
		colourSpec: ["Black", "Green", "Blue","Orange"],
		hintSpec: ["Green", 5],
		solutionDispenseSequence: [3, 2, 2, 3, 3, 1, 2, 3, 3],
		solutionColourSequence: ["Blue", "Blue", "Orange", "Green", "Green", "Orange", "Black", "Black", "Black"]
	},	
	{
		number: "F1",
		publishedOn: "25 Jun 24",
		dispenserSpec: [undefined, "prp","q", "rqpq", "p"],
		matrixSpec: [-4, -3, 5, 6, -2, 7, 8, -1, 9],
		colourSpec: ["Blue", "Black", "Orange"],
		hintSpec: ["Blue", 4],
		solutionDispenseSequence: [1, 3, 2, 3, 3, 4, 1, 1, 3],
		solutionColourSequence: ["Blue", "Black", "Black", "Blue", "Black", "Orange", "Blue", "Blue", "Orange"]
	},
	{
		number: "Ca2",
		publishedOn: "13 Jun 24",
		dispenserSpec: [undefined, "pr", "ppqr","ppq"],
		matrixSpec: [-2, -4, 6, 9, -1, 8, 7, 5, -3],
		colourSpec: ["Black", "Orange", "Blue"],
		hintSpec: ["Black", 7],
		solutionDispenseSequence: [3, 3, 2, 3, 2, 2, 2, 1, 1],
		solutionColourSequence: ["Black", "Black", "Black", "Black", "Orange", "Blue", "Black", "Orange", "Blue"]
	},
	{
		number: "D3",
		publishedOn: "4 Jun 24",
		dispenserSpec: [undefined, "ptq", "p", "qrpps"],
		matrixSpec: [-1, -3, 6, -2, 5, 8, -4, 7, 9],
		colourSpec: ["Orange", "Blue", "Green", "Black", "Pink"],
		hintSpec: ["Orange", 8],
		solutionDispenseSequence: [3, 3, 1, 3, 3, 3, 2, 1, 1],
		solutionColourSequence: ["Black", "Blue", "Blue", "Orange", "Green", "Pink", "Orange", "Orange", "Orange"]
	},
	
// -----------------------------------------------------------------------------------------------------------------------	
	
	{
		number: "Ax1",
		publishedOn: "19 Mar 24",
		dispenserSpec: [undefined, "pq", "rp", "sqsrq"],
		matrixSpec: [9, 8, 7, 6, 5, -4, -3, -2, -1],
		colourSpec: ["Orange", "Blue", "Green", "Black"],
		hintSpec: ["Green", 5],
		solutionDispenseSequence: [1, 1, 2, 3, 3, 3, 3, 2, 3],
		solutionColourSequence: ["Black", "Green", "Blue", "Black", "Green", "Blue", "Orange", "Orange", "Blue"]
	},
	{
		number: "F2",
		publishedOn: "12 Mar 24",
		dispenserSpec: [undefined, "pqrqr","pq", "ps"],
		matrixSpec: [-4, -3, 5, 6, -2, 7, 8, -1, 9],
		colourSpec: ["Green", "Orange", "Blue", "Black"],
		hintSpec: ["Orange", 4],
		solutionDispenseSequence: [3, 3, 1, 1, 1, 1, 1, 2, 2],
		solutionColourSequence: ["Orange", "Blue", "Blue", "Orange", "Green", "Green", "Orange", "Black", "Green"]
	},
	{
		number: "Az17",
		publishedOn: "5 Mar 24",
		dispenserSpec: [undefined, "sqppq","pqqr"],
		matrixSpec: [1, 2, 3, 4, 5, 6, 7, 8, 9],
		colourSpec: ["Black", "Pink", "BBBBBBPP", "PPBBBBBB"],
		hintSpec: ["Pink", 5],
		solutionDispenseSequence: [1, 2, 1, 2, 2, 1, 1, 1, 2],
		solutionColourSequence: ["Pink", "BBBBBBPP", "Black", "Pink", "Pink", "Black", "Pink", "PPBBBBBB", "Black"]
	},
	{
		number: "D2",
		publishedOn: "27 Feb 24",
		dispenserSpec: [undefined, "t","pqsr", "rppp"],
		matrixSpec: [-1, -3, 6, -2, 5, 8, -4, 7, 9],
		colourSpec: ["Black", "Blue", "Green", "Orange", "Pink"],
		hintSpec: ["Black", 5],
		solutionDispenseSequence: [3, 3, 2, 2, 3, 3, 2, 2, 1],
		solutionColourSequence: ["Black", "Green", "Green", "Black", "Black", "Black", "Orange", "Blue", "Pink"]
	},
	{
		number: "Gf1",
		publishedOn: "20 Feb 24",
		dispenserSpec: [undefined, "pqqqqrs","tq"],
		matrixSpec: [-1, -4, 7, 6, 9, -2, -3, 8, 5],
		colourSpec: ["Black", "Green", "Blue", "Pink", "Orange"],
		hintSpec: ["Green", 2],
		solutionDispenseSequence: [1, 2, 1, 1, 1, 2, 1, 1, 1],
		solutionColourSequence: ["Pink", "Green", "Green", "Orange", "Black", "Green", "Blue", "Green", "Green"]
	},
	{
		number: "Cb1",
		publishedOn: "13 Feb 24",
		dispenserSpec: [undefined, "pqqqrr","qp", "q"],
		matrixSpec: [-1, -3, 5, 8, 9, 7, 6, -4, -2],
		colourSpec: ["Black", "Green", "Blue"],
		hintSpec: ["Green", 6],
		solutionDispenseSequence: [1, 3, 1, 1, 1, 2, 1, 1, 2],
		solutionColourSequence: ["Blue", "Blue", "Green", "Black", "Green", "Green", "Black", "Green", "Green"]
	},
	{
		number: "Ca1",
		publishedOn: "6 Feb 24",
		dispenserSpec: [undefined, "pqr","ppsq", "tr"],
		matrixSpec: [-2, -4, 6, 9, -1, 8, 7, 5, -3],
		colourSpec: ["Black", "Orange", "Blue", "Green", "Pink"],
		hintSpec: ["Blue", 2],
		solutionDispenseSequence: [2, 1, 2, 3, 2, 3, 2, 1, 1],
		solutionColourSequence: ["Blue", "Blue", "Pink", "Black", "Orange", "Orange", "Black", "Black", "Green"]
	},
	{
		number: "Az16",
		publishedOn: "30 Jan 24",
		dispenserSpec: [undefined, "p","qrqqp", "prq"],
		matrixSpec: [1, 2, 3, 4, 5, 6, 7, 8, 9],
		colourSpec: ["Black", "Orange", "Green"],
		hintSpec: ["Orange", 6],
		solutionDispenseSequence: [2, 2, 3, 1, 3, 2, 3, 2, 2],
		solutionColourSequence: ["Black", "Orange", "Orange", "Black", "Green", "Orange", "Black", "Green", "Orange"]
	},
/*
	{
		number: "Gf0",
		publishedOn: "18 Jul 23",
		dispenserSpec: [undefined, "p", "p", "pppppqq"],
		matrixSpec: [-1, -4, 7, 6, 9, -2, -3, 8, 5],
		colourSpec: ["Blue", "Orange"],
		hintSpec: ["", 0],
		solutionDispenseSequence: [3, 1, 2, 3, 3, 3, 3, 3, 3],
		solutionColourSequence: ["Orange", "Orange", "Blue", "Blue", "Blue", "Blue", "Blue", "Blue", "Blue"]
	},
*/
	{
		number: "Cb0",
		publishedOn: "20 Jun 23",
		dispenserSpec: [undefined, "psps", "qqrrp"],
		matrixSpec: [-1, -3, 5, 8, 9, 7, 6, -4, -2],
		colourSpec: ["Orange", "Green", "Black", "Blue"],
		hintSpec: ["Orange", 7],
		solutionDispenseSequence: [1, 1, 1, 2, 2, 1, 2, 2, 2],
		solutionColourSequence: ["Blue", "Blue", "Black", "Green", "Green", "Black", "Orange", "Orange", "Orange"]
	},
	{
		number: "Ca0",
		publishedOn: "6 Jun 23",
		dispenserSpec: [undefined, "ppqqppp", "qq"],
		matrixSpec: [-2, -4, 6, 9, -1, 8, 7, 5, -3],
		colourSpec: ["Green", "Blue"],
		hintSpec: ["Green", 2],
		solutionDispenseSequence: [1, 1, 2, 1, 1, 1, 1, 2, 1],
		solutionColourSequence: ["Green", "Green", "Blue", "Green", "Green", "Blue", "Green", "Blue", "Blue"]
	},
	{
		number: "F1",
		publishedOn: "14 Mar 23",
		dispenserSpec: [undefined, "prp", "q", "rqpq", "p"],
		matrixSpec: [-4, -3, 5, 6, -2, 7, 8, -1, 9],
		colourSpec: ["Blue", "Black", "Orange"],
		hintSpec: ["Blue", 4],
		solutionDispenseSequence: [1, 3, 2, 3, 3, 4, 1, 1, 3],
		solutionColourSequence: ["Blue", "Black", "Black", "Blue", "Black", "Orange", "Blue", "Blue", "Orange"]
	},
	{
		number: "F0",
		publishedOn: "14 Mar 23",
		dispenserSpec: [undefined, "pppqqrq", "qp"],
		matrixSpec: [-4, -3, 5, 6, -2, 7, 8, -1, 9],
		colourSpec: ["Black", "Green", "Orange"],
		hintSpec: ["Green", 4],
		solutionDispenseSequence: [2, 1, 2, 1, 1, 1, 1, 1, 1],
		solutionColourSequence: ["Orange", "Green", "Green", "Green", "Green", "Black", "Black", "Black", "Black"]
	},
	{
		number: "D1",
		publishedOn: "7 Mar 23",
		dispenserSpec: [undefined, "pprqqp", "qqp"],
		matrixSpec: [-1, -3, 6, -2, 5, 8, -4, 7, 9],
		colourSpec: ["Orange", "Green", "Black"],
		hintSpec: ["Black", 5],
		solutionDispenseSequence: [1, 1, 2, 1, 1, 1, 2, 1, 2],
		solutionColourSequence: ["Orange", "Orange", "Orange", "Green", "Black", "Orange", "Green", "Green", "Green"]
	},
	{
		number: "D0",
		publishedOn: "7 Mar 23",
		dispenserSpec: [undefined, "q", "p", "rppsqqt"],
		matrixSpec: [-1, -3, 6, -2, 5, 8, -4, 7, 9],
		colourSpec: ["Black", "Blue", "Orange", "Green", "Pink"],
		hintSpec: ["Black", 3],
		solutionDispenseSequence: [3, 3, 2, 3, 3, 3, 1, 3, 3],
		solutionColourSequence: ["Pink", "Black", "Black", "Blue", "Green", "Black", "Blue", "Blue", "Orange"]
	},
	{
		number: "Ac2",
		publishedOn: "28 Feb 23",
		dispenserSpec: [undefined, "qpp", "s", "qpprq"],
		matrixSpec: [-1, -3, -2, -4, 6, 5, 7, 9, 8],
		colourSpec: ["Orange", "Black", "Green", "Blue"],
		hintSpec: ["Orange", 5],
		solutionDispenseSequence: [1, 3, 3, 1, 1, 3, 3, 3, 2],
		solutionColourSequence: ["Orange", "Green", "Black", "Orange", "Orange", "Black", "Orange", "Blue", "Black"]
	},
	{
		number: "Bi1",
		publishedOn: "21 Feb 23",
		dispenserSpec: [undefined, "pqr", "qpt", "srs"],
		matrixSpec: [-1, -2, -3, 8, 9, -4, 7, 6, 5],
		colourSpec: ["Black", "Blue", "Green", "Orange", "Pink"],
		hintSpec: ["Black", 8],
		solutionDispenseSequence: [3, 1, 3, 1, 2, 1, 2, 3, 2],
		solutionColourSequence: ["Orange", "Green", "Green", "Orange", "Blue", "Blue", "Black", "Black", "Pink"]
	},
	{
		number: "Bi0",
		publishedOn: "21 Feb 23",
		dispenserSpec: [undefined, "pqpq", "rt", "sr", "s"],
		matrixSpec: [-1, -2, -3, 8, 9, -4, 7, 6, 5],
		colourSpec: ["Black", "Blue", "Green", "Orange", "Pink"],
		hintSpec: ["Orange", 8],
		solutionDispenseSequence: [1, 1, 2, 2, 3, 3, 4, 1, 1],
		solutionColourSequence: ["Blue", "Black", "Pink", "Blue", "Black", "Green", "Orange", "Orange", "Green"]
	},
	{
		number: "Ar2",
		publishedOn: "14 Feb 23",
		dispenserSpec: [undefined, "rsq", "sp", "tpqr"],
		matrixSpec: [-1, -2, -3, 7, 8, 9, -4, 5, 6],
		colourSpec: ["Black", "Blue", "Orange", "Green", "Pink"],
		hintSpec: ["Black", 8],
		solutionDispenseSequence: [3, 3, 1, 3, 2, 1, 1, 3, 2],
		solutionColourSequence: ["Orange", "Blue", "Blue", "Orange", "Pink", "Green", "Black", "Black", "Green"]
	},
	{
		number: "Ay1",
		publishedOn: "7 Feb 23",
		dispenserSpec: [undefined, "pqpqq", "rprr"],
		matrixSpec: [7, -4, -1, 8, 5, -2, 9, 6, -3],
		colourSpec: ["Black", "Green", "Orange"],
		hintSpec: ["Black", 2],
		solutionDispenseSequence: [1, 1, 2, 1, 1, 2, 1, 2, 2],
		solutionColourSequence: ["Black", "Black", "Green", "Black", "Green", "Green", "Orange", "Orange", "Orange"]
	},
	{
		number: "Ay0",
		publishedOn: "7 Feb 23",
		dispenserSpec: [undefined, "qrqp", "r", "psps"],
		matrixSpec: [7, -4, -1, 8, 5, -2, 9, 6, -3],
		colourSpec: ["Black", "Blue", "Green", "Orange"],
		hintSpec: ["Black", 5],
		solutionDispenseSequence: [3, 1, 3, 3, 3, 1, 1, 2, 1],
		solutionColourSequence: ["Green", "Orange", "Orange", "Green", "Black", "Black", "Blue", "Blue", "Black"]
	},
	{
		number: "Ac1",
		publishedOn: "31 Jan 23",
		dispenserSpec: [undefined, "rps", "pqr", "sq", "p"],
		matrixSpec: [-1, -3, -2, -4, 6, 5, 7, 9, 8],
		colourSpec: ["Green", "Blue", "Black", "Orange"],
		hintSpec: ["Black", 4],
		solutionDispenseSequence: [1, 3, 3, 2, 2, 1, 1, 2, 4],
		solutionColourSequence: ["Orange", "Orange", "Blue", "Black", "Green", "Blue", "Black", "Green", "Green"]
	},
	{
		number: "Ac0",
		publishedOn: "31 Jan 23",
		dispenserSpec: [undefined, "pqrss", "trpq"],
		matrixSpec: [-1, -3, -2, -4, 6, 5, 7, 9, 8],
		colourSpec: ["Black", "Blue", "Green", "Orange", "Pink"],
		hintSpec: ["Black", 5],
		solutionDispenseSequence: [1, 2, 1, 1, 1, 2, 2, 2, 1],
		solutionColourSequence: ["Orange", "Orange", "Blue", "Green", "Black", "Blue", "Green", "Black", "Pink"]
	},
	{
		number: "Ar1",
		publishedOn: "24 Jan 23",
		dispenserSpec: [undefined, "ppqpq", "rpp", "r"],
		matrixSpec: [-1, -2, -3, 7, 8, 9, -4, 5, 6],
		colourSpec: ["Blue", "Orange", "Black"],
		hintSpec: ["Blue", 5],
		solutionDispenseSequence: [1, 2, 2, 2, 3, 1, 1, 1, 1],
		solutionColourSequence: ["Orange", "Blue", "Blue", "Orange", "Blue", "Blue", "Black", "Black", "Blue"]
	},
	{
		number: "Ar0",
		publishedOn: "24 Jan 23",
		dispenserSpec: [undefined, "pqpqqp", "qrp"],
		matrixSpec: [-1, -2, -3, 7, 8, 9, -4, 5, 6],
		colourSpec: ["Black", "Orange", "Green"],
		hintSpec: ["Orange", 6],
		solutionDispenseSequence: [1, 1, 1, 1, 2, 1, 1, 2, 2],
		solutionColourSequence: ["Black", "Orange", "Orange", "Black", "Green", "Orange", "Black", "Black", "Orange"]
	},
	{
		number: "Az15",
		publishedOn: "6 Dec 22",
		dispenserSpec: [undefined, "qpq", "ps", "p", "rsr"],
		matrixSpec: [1, 2, 3, 4, 5, 6, 7, 8, 9],
		colourSpec: ["Blue", "Orange", "Black", "Green"],
		hintSpec: ["Blue", 5],
		solutionDispenseSequence: [4, 4, 2, 4, 2, 1, 1, 3, 1],
		solutionColourSequence: ["Black", "Green", "Green", "Black", "Blue", "Orange", "Blue", "Blue", "Orange"]
	},
	{
		number: "Az14",
		publishedOn: "29 Nov 22",
		dispenserSpec: [undefined, "ppqqprp", "pp"],
		matrixSpec: [1, 2, 3, 4, 5, 6, 7, 8, 9],
		colourSpec: ["Black", "Orange", "Blue"],
		hintSpec: ["Black", 2],
		solutionDispenseSequence: [1, 2, 1, 1, 1, 1, 1, 1, 2],
		solutionColourSequence: ["Black", "Black", "Blue", "Black", "Orange", "Orange", "Black", "Black", "Black"]
	},
	{
		number: "Az13",
		publishedOn: "22 Nov 22",
		dispenserSpec: [undefined, "q", "pqrstp", "qp"],
		matrixSpec: [1, 2, 3, 4, 5, 6, 7, 8, 9],
		colourSpec: ["Green", "Orange", "Blue", "Black", "Pink"],
		hintSpec: ["Orange", 6],
		solutionDispenseSequence: [2, 2, 2, 3, 2, 2, 2, 3, 1],
		solutionColourSequence: ["Green", "Pink", "Black", "Green", "Blue", "Orange", "Green", "Orange", "Orange"]
	},
	{
		number: "Az12",
		publishedOn: "15 Nov 22",
		dispenserSpec: [undefined, "rpq", "qps", "qpr"],
		matrixSpec: [1, 2, 3, 4, 5, 6, 7, 8, 9],
		colourSpec: ["Black", "Blue", "Orange", "Green"],
		hintSpec: ["Orange", 4],
		solutionDispenseSequence: [2, 2, 1, 3, 1, 2, 1, 3, 3],
		solutionColourSequence: ["Green", "Black", "Blue", "Orange", "Black", "Blue", "Orange", "Black", "Blue"]
	},
	{
		number: "Az11",
		publishedOn: "8 Nov 22",
		dispenserSpec: [undefined, "p", "p", "r", "pqqrpq"],
		matrixSpec: [1, 2, 3, 4, 5, 6, 7, 8, 9],
		colourSpec: ["Green", "Black", "Orange"],
		hintSpec: ["Green", 8],
		solutionDispenseSequence: [4, 4, 4, 4, 1, 3, 4, 4, 2],
		solutionColourSequence: ["Black", "Green", "Orange", "Black", "Green", "Orange", "Black", "Green", "Green"]
	},
	{
		number: "Az10",
		publishedOn: "31 Oct 22",
		dispenserSpec: [undefined, "ps", "rsr", "pqtq"],
		matrixSpec: [1, 2, 3, 4, 5, 6, 7, 8, 9],
		colourSpec: ["Blue", "Black", "Green", "Orange", "Pink"],
		hintSpec: ["Black", 5],
		solutionDispenseSequence: [2, 2, 1, 2, 3, 1, 3, 3, 3],
		solutionColourSequence: ["Green", "Orange", "Orange", "Green", "Black", "Blue", "Pink", "Black", "Blue"]
	},
	{
		number: "Az9",
		publishedOn: "24 Oct 22",
		dispenserSpec: [undefined, "pppqs", "rtqr"],
		matrixSpec: [1, 2, 3, 4, 5, 6, 7, 8, 9],
		colourSpec: ["Green", "Blue", "Orange", "Pink", "Black"],
		hintSpec: ["Black", 4],
		solutionDispenseSequence: [1, 2, 2, 2, 2, 1, 1, 1, 1],
		solutionColourSequence: ["Pink", "Orange", "Blue", "Black", "Orange", "Blue", "Green", "Green", "Green"]
	},
	{
		number: "Az8",
		publishedOn: "17 Oct 22",
		dispenserSpec: [undefined, "pqpqp", "pqpq"],
		matrixSpec: [1, 2, 3, 4, 5, 6, 7, 8, 9],
		colourSpec: ["Blue", "Black"],
		hintSpec: ["Blue", 8],
		solutionDispenseSequence: [2, 1, 2, 1, 2, 1, 1, 1, 2],
		solutionColourSequence: ["Black", "Blue", "Blue", "Black", "Black", "Blue", "Black", "Blue", "Blue"]
	},
	{
		number: "Az7",
		publishedOn: "10 Oct 22",
		dispenserSpec: [undefined, "pqqqrp", "p", "pq"],
		matrixSpec: [1, 2, 3, 4, 5, 6, 7, 8, 9],
		colourSpec: ["Orange", "Green", "Black"],
		hintSpec: ["Orange", 2],
		solutionDispenseSequence: [3, 1, 1, 1, 3, 2, 1, 1, 1],
		solutionColourSequence: ["Green", "Orange", "Black", "Green", "Orange", "Orange", "Green", "Green", "Orange"]
	},
	{
		number: "Az6",
		publishedOn: "4 Oct 22",
		dispenserSpec: [undefined, "rq", "spqrppp"],
		matrixSpec: [1, 2, 3, 4, 5, 6, 7, 8, 9],
		colourSpec: ["Black", "Blue", "Orange", "Green"],
		hintSpec: ["Orange", 5],
		solutionDispenseSequence: [2, 2, 1, 2, 2, 2, 2, 1, 2],
		solutionColourSequence: ["Black", "Black", "Blue", "Black", "Orange", "Blue", "Black", "Orange", "Green"]
	},
	{
		number: "Az5",
		publishedOn: "27 Sep 22",
		dispenserSpec: [undefined, "r", "r", "pqqqrp", "p"],
		matrixSpec: [1, 2, 3, 4, 5, 6, 7, 8, 9],
		colourSpec: ["Black", "Blue", "Orange"],
		hintSpec: ["Orange", 2],
		solutionDispenseSequence: [1, 2, 3, 3, 3, 4, 3, 3, 3],
		solutionColourSequence: ["Orange", "Orange", "Black", "Orange", "Blue", "Black", "Blue", "Blue", "Black"]
	},
	{
		number: "Az4",
		publishedOn: "19 Sep 22",
		dispenserSpec: [undefined, "pqqrp", "rpr", "q"],
		matrixSpec: [1, 2, 3, 4, 5, 6, 7, 8, 9],
		colourSpec: ["Black", "Blue", "Orange"],
		hintSpec: ["Orange", 7],
		solutionDispenseSequence: [2, 3, 1, 1, 1, 2, 2, 1, 1],
		solutionColourSequence: ["Orange", "Blue", "Black", "Orange", "Blue", "Black", "Orange", "Blue", "Black"]
	},
	{
		number: "Az3",
		publishedOn: "13 Sep 22",
		dispenserSpec: [undefined, "qrrps", "pq", "sp"],
		matrixSpec: [1, 2, 3, 4, 5, 6, 7, 8, 9],
		colourSpec: ["Black", "Blue", "Green", "Orange"],
		hintSpec: ["Green", 5],
		solutionDispenseSequence: [3, 1, 3, 1, 1, 2, 2, 1, 1],
		solutionColourSequence: ["Black", "Orange", "Orange", "Black", "Green", "Blue", "Black", "Green", "Blue"]
	},
	{
		number: "Az2",
		publishedOn: "6 Sep 22",
		dispenserSpec: [undefined, "qrqp", "r", "psps"],
		matrixSpec: [1, 2, 3, 4, 5, 6, 7, 8, 9],
		colourSpec: ["Black", "Blue", "Green", "Orange"],
		hintSpec: ["Black", 5],
		solutionDispenseSequence: [3, 1, 3, 3, 3, 1, 1, 2, 1],
		solutionColourSequence: ["Orange", "Black", "Black", "Orange", "Black", "Blue", "Green", "Green", "Blue"]
	},
	{
		number: "Az1",
		publishedOn: "29 Aug 22",
		dispenserSpec: [undefined, "qqrpp", "pssr"],
		matrixSpec: [1, 2, 3, 4, 5, 6, 7, 8, 9],
		colourSpec: ["Black", "Blue", "Green", "Orange"],
		hintSpec: ["Orange", 6],
		solutionDispenseSequence: [1, 2, 2, 1, 1, 2, 2, 1, 1],
		solutionColourSequence: ["Black", "Green", "Orange", "Black", "Green", "Orange", "Black", "Blue", "Blue"]
	},
	{
		number: "Az0",
		publishedOn: "29 Aug 22",
		dispenserSpec: [undefined, "ps", "qppq", "rsr"],
		matrixSpec: [1, 2, 3, 4, 5, 6, 7, 8, 9],
		colourSpec: ["Black", "Blue", "Green", "Orange"],
		hintSpec: ["Black", 5],
		solutionDispenseSequence: [3, 3, 1, 3, 1, 2, 2, 2, 2],
		solutionColourSequence: ["Green", "Orange", "Orange", "Green", "Black", "Blue", "Black", "Black", "Blue"]
	}
];

