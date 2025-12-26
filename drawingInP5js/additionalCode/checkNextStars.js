function checkNextStars(currentConstellation) {
	switch (currentConstellation) { // Check which constellation we are currently drawing

		case 1: // 0 = aries
			switch (currentStar) { // Check which star we are on, and
				// determines neighbouring stars based on currentStar
				case 1:
					neighbouringStars = [aries.v2]
					break;
				case 2:
					neighbouringStars = [aries.v1, aries.v3]
					break;
				case 3:
					neighbouringStars = [aries.v2, aries.v4]
					break;
				case 4:
					neighbouringStars = [aries.v3]
					break;
			}

			// Sends drawn lines to line array so that system knows when all lines have been drawn
			if ((previousStar == 1 && currentStar == 2) ||
				(previousStar == 2 && currentStar == 1)) {
				constellations[currentConstellation].line[0] = 1;
			}

			else if ((previousStar == 2 && currentStar == 3) ||
				(previousStar == 3 && currentStar == 2)) {
				constellations[currentConstellation].line[1] = 1;
			}

			else if ((previousStar == 4 && currentStar == 3) ||
				(previousStar == 3 && currentStar == 4)) {
				constellations[currentConstellation].line[2] = 1;
			}
			break;

		case 2: // 1 = taurus
			switch (currentStar) { // Check which star we are on, and
				// determines neighbouring stars based on currentStar
				case 1:
					neighbouringStars = [taurus.v2];
					break;
				case 2:
					neighbouringStars = [taurus.v1, taurus.v3];
					break;
				case 3:
					neighbouringStars = [taurus.v2, taurus.v4, taurus.v12];
					break;
				case 4:
					neighbouringStars = [taurus.v3, taurus.v5];
					break;
				case 5:
					neighbouringStars = [taurus.v4, taurus.v6, taurus.v7];
					break;
				case 6:
					neighbouringStars = [taurus.v5];
					break;
				case 7:
					neighbouringStars = [taurus.v5, taurus.v8, taurus.v11,];
					break;
				case 8:
					neighbouringStars = [taurus.v7, taurus.v9];
					break;
				case 9:
					neighbouringStars = [taurus.v8];
					break;
				case 10:
					neighbouringStars = [taurus.v12];
					break;
				case 11:
					neighbouringStars = [taurus.v7, taurus.v12];
					break;
				case 12:
					neighbouringStars = [taurus.v11, taurus.v3, taurus.v10];
					break;
			}

			// Sends drawn lines to line array so that system knows when all lines have been drawn
			if ((previousStar == 1 && currentStar == 2) ||
				(previousStar == 2 && currentStar == 1)) {
				constellations[currentConstellation].line[0] = 1;
			}

			else if ((previousStar == 2 && currentStar == 3) ||
				(previousStar == 3 && currentStar == 2)) {
				constellations[currentConstellation].line[1] = 1;
			}

			else if ((previousStar == 4 && currentStar == 3) ||
				(previousStar == 3 && currentStar == 4)) {
				constellations[currentConstellation].line[2] = 1;
			}

			else if ((previousStar == 4 && currentStar == 5) ||
				(previousStar == 5 && currentStar == 4)) {
				constellations[currentConstellation].line[3] = 1;
			}

			else if ((previousStar == 5 && currentStar == 6) ||
				(previousStar == 6 && currentStar == 5)) {
				constellations[currentConstellation].line[4] = 1;
			}

			else if ((previousStar == 3 && currentStar == 12) ||
				(previousStar == 12 && currentStar == 3)) {
				constellations[currentConstellation].line[5] = 1;
			}

			else if ((previousStar == 12 && currentStar == 10) ||
				(previousStar == 10 && currentStar == 12)) {
				constellations[currentConstellation].line[6] = 1;
			}

			else if ((previousStar == 12 && currentStar == 11) ||
				(previousStar == 11 && currentStar == 12)) {
				constellations[currentConstellation].line[7] = 1;
			}

			else if ((previousStar == 7 && currentStar == 11) ||
				(previousStar == 11 && currentStar == 7)) {
				constellations[currentConstellation].line[8] = 1;
			}

			else if ((previousStar == 7 && currentStar == 8) ||
				(previousStar == 8 && currentStar == 7)) {
				constellations[currentConstellation].line[9] = 1;
			}

			else if ((previousStar == 8 && currentStar == 9) ||
				(previousStar == 9 && currentStar == 8)) {
				constellations[currentConstellation].line[10] = 1;
			}

			else if ((previousStar == 5 && currentStar == 7) ||
				(previousStar == 7 && currentStar == 5)) {
				constellations[currentConstellation].line[11] = 1;
			}

			break;

		case 3: // Gemini
			switch (currentStar) {

				case 1:
					neighbouringStars = [gemini.v2]
					break;

				case 2:
					neighbouringStars = [gemini.v1, gemini.v3]
					break;

				case 3:
					neighbouringStars = [gemini.v2, gemini.v4]
					break;

				case 4:
					neighbouringStars = [gemini.v3, gemini.v5, gemini.v6]
					break;

				case 5:
					neighbouringStars = [gemini.v4]
					break;

				case 6:
					neighbouringStars = [gemini.v4, gemini.v7, gemini.v8, gemini.v9]
					break;

				case 7:
					neighbouringStars = [gemini.v6]
					break;

				case 8:
					neighbouringStars = [gemini.v6]
					break;

				case 9:
					neighbouringStars = [gemini.v6, gemini.v11]
					break;

				case 10:
					neighbouringStars = [gemini.v11]
					break;

				case 11:
					neighbouringStars = [gemini.v9, gemini.v10, gemini.v12, gemini.v13]
					break;

				case 12:
					neighbouringStars = [gemini.v11]
					break;

				case 13:
					neighbouringStars = [gemini.v11, gemini.v14, gemini.v15]
					break;

				case 14:
					neighbouringStars = [gemini.v13, gemini.v17]
					break;

				case 15:
					neighbouringStars = [gemini.v13, gemini.v16]
					break;

				case 16:
					neighbouringStars = [gemini.v15]
					break;

				case 17:
					neighbouringStars = [gemini.v14]
					break;
			}

			if ((previousStar == 1 && currentStar == 2) ||
				(previousStar == 2 && currentStar == 1)) {
				constellations[currentConstellation].line[0] = 1;
			}

			else if ((previousStar == 2 && currentStar == 3) ||
				(previousStar == 3 && currentStar == 2)) {
				constellations[currentConstellation].line[1] = 1;
			}

			else if ((previousStar == 3 && currentStar == 4) ||
				(previousStar == 4 && currentStar == 3)) {
				constellations[currentConstellation].line[2] = 1;
			}

			else if ((previousStar == 4 && currentStar == 5) ||
				(previousStar == 5 && currentStar == 4)) {
				constellations[currentConstellation].line[3] = 1;
			}

			else if ((previousStar == 4 && currentStar == 6) ||
				(previousStar == 6 && currentStar == 4)) {
				constellations[currentConstellation].line[4] = 1;
			}

			else if ((previousStar == 6 && currentStar == 7) ||
				(previousStar == 7 && currentStar == 6)) {
				constellations[currentConstellation].line[5] = 1;
			}

			else if ((previousStar == 6 && currentStar == 8) ||
				(previousStar == 8 && currentStar == 6)) {
				constellations[currentConstellation].line[6] = 1;
			}

			else if ((previousStar == 6 && currentStar == 9) ||
				(previousStar == 9 && currentStar == 6)) {
				constellations[currentConstellation].line[7] = 1;
			}

			else if ((previousStar == 9 && currentStar == 11) ||
				(previousStar == 11 && currentStar == 9)) {
				constellations[currentConstellation].line[8] = 1;
			}

			else if ((previousStar == 11 && currentStar == 10) ||
				(previousStar == 10 && currentStar == 11)) {
				constellations[currentConstellation].line[9] = 1;
			}

			else if ((previousStar == 11 && currentStar == 12) ||
				(previousStar == 12 && currentStar == 11)) {
				constellations[currentConstellation].line[10] = 1;
			}

			else if ((previousStar == 11 && currentStar == 13) ||
				(previousStar == 13 && currentStar == 11)) {
				constellations[currentConstellation].line[11] = 1;
			}

			else if ((previousStar == 13 && currentStar == 14) ||
				(previousStar == 14 && currentStar == 13)) {
				constellations[currentConstellation].line[12] = 1;
			}

			else if ((previousStar == 13 && currentStar == 15) ||
				(previousStar == 15 && currentStar == 13)) {
				constellations[currentConstellation].line[13] = 1;
			}

			else if ((previousStar == 14 && currentStar == 17) ||
				(previousStar == 17 && currentStar == 14)) {
				constellations[currentConstellation].line[14] = 1;
			}

			else if ((previousStar == 15 && currentStar == 16) ||
				(previousStar == 16 && currentStar == 15)) {
				constellations[currentConstellation].line[15] = 1;
			}

			break;

		case 4: // Cancer
			switch (currentStar) {

				case 1:
					neighbouringStars = [cancer.v3]
					break;

				case 2:
					neighbouringStars = [cancer.v3]
					break;

				case 3:
					neighbouringStars = [cancer.v1, cancer.v2, cancer.v4]
					break;

				case 4:
					neighbouringStars = [cancer.v3, cancer.v5, cancer.v6]
					break;

				case 5:
					neighbouringStars = [cancer.v4]
					break;

				case 6:
					neighbouringStars = [cancer.v4]
					break;
			}

			if ((previousStar == 1 && currentStar == 3) ||
				(previousStar == 3 && currentStar == 1)) {
				constellations[currentConstellation].line[0] = 1;
			}

			else if ((previousStar == 2 && currentStar == 3) ||
				(previousStar == 3 && currentStar == 2)) {
				constellations[currentConstellation].line[1] = 1;
			}

			else if ((previousStar == 3 && currentStar == 4) ||
				(previousStar == 4 && currentStar == 3)) {
				constellations[currentConstellation].line[2] = 1;
			}

			else if ((previousStar == 4 && currentStar == 5) ||
				(previousStar == 5 && currentStar == 4)) {
				constellations[currentConstellation].line[3] = 1;
			}

			else if ((previousStar == 4 && currentStar == 6) ||
				(previousStar == 6 && currentStar == 4)) {
				constellations[currentConstellation].line[4] = 1;
			}

			break;

		case 5: // Leo
			switch (currentStar) {

				case 1:
					neighbouringStars = [leo.v2]
					break;

				case 2:
					neighbouringStars = [leo.v1, leo.v3]
					break;

				case 3:
					neighbouringStars = [leo.v2, leo.v4]
					break;

				case 4:
					neighbouringStars = [leo.v3, leo.v5, leo.v7]
					break;

				case 5:
					neighbouringStars = [leo.v4, leo.v6]
					break;

				case 6:
					neighbouringStars = [leo.v5, leo.v8]
					break;

				case 7:
					neighbouringStars = [leo.v4, leo.v8, leo.v9]
					break;

				case 8:
					neighbouringStars = [leo.v6, leo.v7, leo.v9]
					break;

				case 9:
					neighbouringStars = [leo.v7, leo.v8]
					break;
			}

			if ((previousStar == 1 && currentStar == 2) ||
				(previousStar == 2 && currentStar == 1)) {
				constellations[currentConstellation].line[0] = 1;
			}

			else if ((previousStar == 2 && currentStar == 3) ||
				(previousStar == 3 && currentStar == 2)) {
				constellations[currentConstellation].line[1] = 1;
			}

			else if ((previousStar == 3 && currentStar == 4) ||
				(previousStar == 4 && currentStar == 3)) {
				constellations[currentConstellation].line[2] = 1;
			}

			else if ((previousStar == 4 && currentStar == 5) ||
				(previousStar == 5 && currentStar == 4)) {
				constellations[currentConstellation].line[3] = 1;
			}

			else if ((previousStar == 4 && currentStar == 7) ||
				(previousStar == 7 && currentStar == 4)) {
				constellations[currentConstellation].line[4] = 1;
			}

			else if ((previousStar == 6 && currentStar == 8) ||
				(previousStar == 8 && currentStar == 6)) {
				constellations[currentConstellation].line[5] = 1;
			}

			else if ((previousStar == 7 && currentStar == 8) ||
				(previousStar == 8 && currentStar == 7)) {
				constellations[currentConstellation].line[6] = 1;
			}

			else if ((previousStar == 7 && currentStar == 9) ||
				(previousStar == 9 && currentStar == 7)) {
				constellations[currentConstellation].line[7] = 1;
			}

			else if ((previousStar == 8 && currentStar == 9) ||
				(previousStar == 9 && currentStar == 8)) {
				constellations[currentConstellation].line[8] = 1;
			}
			break;

		case 6: // Virgo
			switch (currentStar) {

				case 1:
					neighbouringStars = [virgo.v2];
					break;

				case 2:
					neighbouringStars = [virgo.v1, virgo.v3];
					break;

				case 3:
					neighbouringStars = [virgo.v2, virgo.v4, virgo.v9];
					break;

				case 4:
					neighbouringStars = [virgo.v3, virgo.v5, virgo.v6];
					break;

				case 5:
					neighbouringStars = [virgo.v4];
					break;

				case 6:
					neighbouringStars = [virgo.v4, virgo.v7, virgo.v9];
					break;

				case 7:
					neighbouringStars = [virgo.v6, virgo.v8];
					break;

				case 8:
					neighbouringStars = [virgo.v7];
					break;

				case 9:
					neighbouringStars = [virgo.v3, virgo.v6, virgo.v10];
					break;

				case 10:
					neighbouringStars = [virgo.v9, virgo.v11];
					break;

				case 11:
					neighbouringStars = [virgo.v10, virgo.v12];
					break;

				case 12:
					neighbouringStars = [virgo.v11];
					break;
			}

			if ((previousStar == 1 && currentStar == 2) ||
				(previousStar == 2 && currentStar == 1)) {
				constellations[currentConstellation].line[0] = 1;
			}

			else if ((previousStar == 2 && currentStar == 3) ||
				(previousStar == 3 && currentStar == 2)) {
				constellations[currentConstellation].line[1] = 1;
			}

			else if ((previousStar == 3 && currentStar == 4) ||
				(previousStar == 4 && currentStar == 3)) {
				constellations[currentConstellation].line[2] = 1;
			}

			else if ((previousStar == 3 && currentStar == 9) ||
				(previousStar == 9 && currentStar == 3)) {
				constellations[currentConstellation].line[3] = 1;
			}

			else if ((previousStar == 4 && currentStar == 5) ||
				(previousStar == 5 && currentStar == 4)) {
				constellations[currentConstellation].line[4] = 1;
			}

			else if ((previousStar == 4 && currentStar == 6) ||
				(previousStar == 6 && currentStar == 4)) {
				constellations[currentConstellation].line[5] = 1;
			}

			else if ((previousStar == 6 && currentStar == 9) ||
				(previousStar == 9 && currentStar == 6)) {
				constellations[currentConstellation].line[6] = 1;
			}

			else if ((previousStar == 6 && currentStar == 7) ||
				(previousStar == 7 && currentStar == 6)) {
				constellations[currentConstellation].line[7] = 1;
			}

			else if ((previousStar == 7 && currentStar == 8) ||
				(previousStar == 8 && currentStar == 7)) {
				constellations[currentConstellation].line[8] = 1;
			}

			else if ((previousStar == 9 && currentStar == 10) ||
				(previousStar == 10 && currentStar == 9)) {
				constellations[currentConstellation].line[9] = 1;
			}

			else if ((previousStar == 10 && currentStar == 11) ||
				(previousStar == 11 && currentStar == 10)) {
				constellations[currentConstellation].line[10] = 1;
			}

			else if ((previousStar == 11 && currentStar == 12) ||
				(previousStar == 12 && currentStar == 11)) {
				constellations[currentConstellation].line[11] = 1;
			}

			break;

		case 7: // Libra
			switch (currentStar) {
				case 1:
					neighbouringStars = [libra.v2, libra.v5];
					break;

				case 2:
					neighbouringStars = [libra.v1, libra.v3];
					break;

				case 3:
					neighbouringStars = [libra.v2, libra.v4, libra.v5];
					break;

				case 4:
					neighbouringStars = [libra.v3];
					break;

				case 5:
					neighbouringStars = [libra.v1, libra.v3];
					break;
			}

			if ((previousStar == 1 && currentStar == 2) ||
				(previousStar == 2 && currentStar == 1)) {
				constellations[currentConstellation].line[0] = 1;
			}

			else if ((previousStar == 1 && currentStar == 5) ||
				(previousStar == 5 && currentStar == 1)) {
				constellations[currentConstellation].line[1] = 1;
			}

			else if ((previousStar == 2 && currentStar == 3) ||
				(previousStar == 3 && currentStar == 2)) {
				constellations[currentConstellation].line[2] = 1;
			}

			else if ((previousStar == 3 && currentStar == 4) ||
				(previousStar == 4 && currentStar == 3)) {
				constellations[currentConstellation].line[3] = 1;
			}

			else if ((previousStar == 3 && currentStar == 5) ||
				(previousStar == 5 && currentStar == 3)) {
				constellations[currentConstellation].line[4] = 1;
			}

			break;

		case 8: // Scorpius
			switch (currentStar) {

				case 1:
					neighbouringStars = [scorpius.v4];
					break;

				case 2:
					neighbouringStars = [scorpius.v4];
					break;

				case 3:
					neighbouringStars = [scorpius.v4];
					break;

				case 4:
					neighbouringStars = [scorpius.v1, scorpius.v2, scorpius.v3, scorpius.v5];
					break;

				case 5:
					neighbouringStars = [scorpius.v4, scorpius.v6];
					break;

				case 6:
					neighbouringStars = [scorpius.v5, scorpius.v7];
					break;

				case 7:
					neighbouringStars = [scorpius.v6, scorpius.v8];
					break;

				case 8:
					neighbouringStars = [scorpius.v7, scorpius.v9];
					break;

				case 9:
					neighbouringStars = [scorpius.v8, scorpius.v10];
					break;

				case 10:
					neighbouringStars = [scorpius.v9, scorpius.v11];
					break;

				case 11:
					neighbouringStars = [scorpius.v10, scorpius.v12];
					break;

				case 12:
					neighbouringStars = [scorpius.v11, scorpius.v13];
					break;

				case 13:
					neighbouringStars = [scorpius.v12];
					break;
			}

			if ((previousStar == 1 && currentStar == 4) ||
				(previousStar == 4 && currentStar == 1)) {
				constellations[currentConstellation].line[0] = 1;
			}

			else if ((previousStar == 2 && currentStar == 4) ||
				(previousStar == 4 && currentStar == 2)) {
				constellations[currentConstellation].line[1] = 1;
			}

			else if ((previousStar == 3 && currentStar == 4) ||
				(previousStar == 4 && currentStar == 3)) {
				constellations[currentConstellation].line[2] = 1;
			}

			else if ((previousStar == 4 && currentStar == 5) ||
				(previousStar == 5 && currentStar == 4)) {
				constellations[currentConstellation].line[3] = 1;
			}

			else if ((previousStar == 5 && currentStar == 6) ||
				(previousStar == 6 && currentStar == 5)) {
				constellations[currentConstellation].line[4] = 1;
			}

			else if ((previousStar == 6 && currentStar == 7) ||
				(previousStar == 7 && currentStar == 6)) {
				constellations[currentConstellation].line[5] = 1;
			}

			else if ((previousStar == 7 && currentStar == 8) ||
				(previousStar == 8 && currentStar == 7)) {
				constellations[currentConstellation].line[6] = 1;
			}

			else if ((previousStar == 8 && currentStar == 9) ||
				(previousStar == 9 && currentStar == 8)) {
				constellations[currentConstellation].line[7] = 1;
			}

			else if ((previousStar == 9 && currentStar == 10) ||
				(previousStar == 10 && currentStar == 9)) {
				constellations[currentConstellation].line[8] = 1;
			}

			else if ((previousStar == 10 && currentStar == 11) ||
				(previousStar == 11 && currentStar == 10)) {
				constellations[currentConstellation].line[9] = 1;
			}

			else if ((previousStar == 11 && currentStar == 12) ||
				(previousStar == 12 && currentStar == 11)) {
				constellations[currentConstellation].line[10] = 1;
			}

			else if ((previousStar == 12 && currentStar == 13) ||
				(previousStar == 13 && currentStar == 12)) {
				constellations[currentConstellation].line[11] = 1;
			}

			break;

		case 9: // Sagittarius
			switch (currentStar) {

				case 1:
					neighbouringStars = [sagittarius.v3];
					break;

				case 2:
					neighbouringStars = [sagittarius.v4];
					break;

				case 3:
					neighbouringStars = [sagittarius.v1, sagittarius.v5, sagittarius.v9];
					break;

				case 4:
					neighbouringStars = [sagittarius.v2, sagittarius.v5, sagittarius.v6];
					break;

				case 5:
					neighbouringStars = [sagittarius.v3, sagittarius.v4, sagittarius.v6, sagittarius.v9];
					break;

				case 6:
					neighbouringStars = [sagittarius.v4, sagittarius.v5, sagittarius.v7, sagittarius.v8];
					break;

				case 7:
					neighbouringStars = [sagittarius.v6];
					break;

				case 8:
					neighbouringStars = [sagittarius.v6, sagittarius.v9, sagittarius.v15];
					break;

				case 9:
					neighbouringStars = [sagittarius.v3, sagittarius.v5, sagittarius.v8, sagittarius.v10];
					break;

				case 10:
					neighbouringStars = [sagittarius.v9, sagittarius.v11, sagittarius.v15];
					break;

				case 11:
					neighbouringStars = [sagittarius.v10, sagittarius.v12];
					break;

				case 12:
					neighbouringStars = [sagittarius.v11, sagittarius.v13];
					break;

				case 13:
					neighbouringStars = [sagittarius.v12, sagittarius.v14];
					break;

				case 14:
					neighbouringStars = [sagittarius.v13];
					break;

				case 15:
					neighbouringStars = [sagittarius.v8, sagittarius.v10, sagittarius.v16];
					break;

				case 16:
					neighbouringStars = [sagittarius.v15, sagittarius.v17];
					break;

				case 17:
					neighbouringStars = [sagittarius.v16, sagittarius.v18];
					break;

				case 18:
					neighbouringStars = [sagittarius.v17, sagittarius.v19];
					break;

				case 19:
					neighbouringStars = [sagittarius.v18, sagittarius.v20, sagittarius.v21];
					break;

				case 20:
					neighbouringStars = [sagittarius.v19];
					break;

				case 21:
					neighbouringStars = [sagittarius.v19];
					break;
			}

			if ((previousStar == 1 && currentStar == 3) ||
				(previousStar == 3 && currentStar == 1)) {
				constellations[currentConstellation].line[0] = 1;
			}

			else if ((previousStar == 2 && currentStar == 4) ||
				(previousStar == 4 && currentStar == 2)) {
				constellations[currentConstellation].line[1] = 1;
			}

			else if ((previousStar == 4 && currentStar == 5) ||
				(previousStar == 5 && currentStar == 4)) {
				constellations[currentConstellation].line[2] = 1;
			}

			else if ((previousStar == 3 && currentStar == 5) ||
				(previousStar == 5 && currentStar == 3)) {
				constellations[currentConstellation].line[3] = 1;
			}

			else if ((previousStar == 4 && currentStar == 6) ||
				(previousStar == 6 && currentStar == 4)) {
				constellations[currentConstellation].line[4] = 1;
			}

			else if ((previousStar == 5 && currentStar == 6) ||
				(previousStar == 6 && currentStar == 5)) {
				constellations[currentConstellation].line[5] = 1;
			}

			else if ((previousStar == 6 && currentStar == 7) ||
				(previousStar == 7 && currentStar == 6)) {
				constellations[currentConstellation].line[6] = 1;
			}

			else if ((previousStar == 5 && currentStar == 9) ||
				(previousStar == 9 && currentStar == 5)) {
				constellations[currentConstellation].line[7] = 1;
			}

			else if ((previousStar == 3 && currentStar == 9) ||
				(previousStar == 9 && currentStar == 3)) {
				constellations[currentConstellation].line[8] = 1;
			}

			else if ((previousStar == 9 && currentStar == 10) ||
				(previousStar == 10 && currentStar == 9)) {
				constellations[currentConstellation].line[9] = 1;
			}

			else if ((previousStar == 9 && currentStar == 8) ||
				(previousStar == 8 && currentStar == 9)) {
				constellations[currentConstellation].line[10] = 1;
			}

			else if ((previousStar == 8 && currentStar == 6) ||
				(previousStar == 6 && currentStar == 8)) {
				constellations[currentConstellation].line[11] = 1;
			}

			else if ((previousStar == 8 && currentStar == 15) ||
				(previousStar == 15 && currentStar == 8)) {
				constellations[currentConstellation].line[12] = 1;
			}

			else if ((previousStar == 15 && currentStar == 10) ||
				(previousStar == 10 && currentStar == 15)) {
				constellations[currentConstellation].line[13] = 1;
			}

			else if ((previousStar == 15 && currentStar == 16) ||
				(previousStar == 16 && currentStar == 15)) {
				constellations[currentConstellation].line[14] = 1;
			}

			else if ((previousStar == 10 && currentStar == 11) ||
				(previousStar == 11 && currentStar == 10)) {
				constellations[currentConstellation].line[15] = 1;
			}

			else if ((previousStar == 11 && currentStar == 12) ||
				(previousStar == 12 && currentStar == 11)) {
				constellations[currentConstellation].line[16] = 1;
			}

			else if ((previousStar == 12 && currentStar == 13) ||
				(previousStar == 13 && currentStar == 12)) {
				constellations[currentConstellation].line[17] = 1;
			}

			else if ((previousStar == 13 && currentStar == 14) ||
				(previousStar == 14 && currentStar == 13)) {
				constellations[currentConstellation].line[18] = 1;
			}

			else if ((previousStar == 16 && currentStar == 17) ||
				(previousStar == 17 && currentStar == 16)) {
				constellations[currentConstellation].line[19] = 1;
			}

			else if ((previousStar == 17 && currentStar == 18) ||
				(previousStar == 18 && currentStar == 17)) {
				constellations[currentConstellation].line[20] = 1;
			}

			else if ((previousStar == 18 && currentStar == 19) ||
				(previousStar == 19 && currentStar == 18)) {
				constellations[currentConstellation].line[21] = 1;
			}

			else if ((previousStar == 19 && currentStar == 20) ||
				(previousStar == 20 && currentStar == 19)) {
				constellations[currentConstellation].line[22] = 1;
			}

			else if ((previousStar == 19 && currentStar == 21) ||
				(previousStar == 21 && currentStar == 19)) {
				constellations[currentConstellation].line[23] = 1;
			}

			break;

		case 10: // capricorn
			switch (currentStar) {

				case 1:
					neighbouringStars = [capricorn.v2];
					break;

				case 2:
					neighbouringStars = [capricorn.v1, capricorn.v3, capricorn.v4];
					break;

				case 3:
					neighbouringStars = [capricorn.v2];
					break;

				case 4:
					neighbouringStars = [capricorn.v2, capricorn.v5, capricorn.v6, capricorn.v7];
					break;

				case 5:
					neighbouringStars = [capricorn.v4];
					break;

				case 6:
					neighbouringStars = [capricorn.v4, capricorn.v7];
					break;

				case 7:
					neighbouringStars = [capricorn.v4, capricorn.v6, capricorn.v8];
					break;

				case 8:
					neighbouringStars = [capricorn.v7, capricorn.v9];
					break;

				case 9:
					neighbouringStars = [capricorn.v8];
					break;
			}

			if ((previousStar == 1 && currentStar == 2) ||
				(previousStar == 2 && currentStar == 1))
				constellations[currentConstellation].line[0] = 1;

			else if ((previousStar == 2 && currentStar == 3) ||
				(previousStar == 3 && currentStar == 2))
				constellations[currentConstellation].line[1] = 1;

			else if ((previousStar == 2 && currentStar == 4) ||
				(previousStar == 4 && currentStar == 2))
				constellations[currentConstellation].line[2] = 1;

			else if ((previousStar == 4 && currentStar == 5) ||
				(previousStar == 5 && currentStar == 4))
				constellations[currentConstellation].line[3] = 1;

			else if ((previousStar == 4 && currentStar == 6) ||
				(previousStar == 6 && currentStar == 4))
				constellations[currentConstellation].line[4] = 1;

			else if ((previousStar == 4 && currentStar == 7) ||
				(previousStar == 7 && currentStar == 4))
				constellations[currentConstellation].line[5] = 1;

			else if ((previousStar == 7 && currentStar == 6) ||
				(previousStar == 6 && currentStar == 7))
				constellations[currentConstellation].line[6] = 1;

			else if ((previousStar == 7 && currentStar == 8) ||
				(previousStar == 8 && currentStar == 7))
				constellations[currentConstellation].line[7] = 1;

			else if ((previousStar == 8 && currentStar == 9) ||
				(previousStar == 9 && currentStar == 8))
				constellations[currentConstellation].line[8] = 1;

			break;

		case 11: // Aquarius
			switch (currentStar) {

				case 1:
					neighbouringStars = [aquarius.v2];
					break;

				case 2:
					neighbouringStars = [aquarius.v1, aquarius.v3];
					break;

				case 3:
					neighbouringStars = [aquarius.v2, aquarius.v4];
					break;

				case 4:
					neighbouringStars = [aquarius.v3, aquarius.v5, aquarius.v11];
					break;

				case 5:
					neighbouringStars = [aquarius.v4, aquarius.v6, aquarius.v7];
					break;

				case 6:
					neighbouringStars = [aquarius.v5];
					break;

				case 7:
					neighbouringStars = [aquarius.v5, aquarius.v8];
					break;

				case 8:
					neighbouringStars = [aquarius.v7, aquarius.v9];
					break;

				case 9:
					neighbouringStars = [aquarius.v8, aquarius.v10];
					break;

				case 10:
					neighbouringStars = [aquarius.v9];
					break;

				case 11:
					neighbouringStars = [aquarius.v4, aquarius.v12];
					break;

				case 12:
					neighbouringStars = [aquarius.v11, aquarius.v13];
					break;

				case 13:
					neighbouringStars = [aquarius.v12, aquarius.v14];
					break;

				case 14:
					neighbouringStars = [aquarius.v13, aquarius.v15];
					break;

				case 15:
					neighbouringStars = [aquarius.v14, aquarius.v16];
					break;

				case 16:
					neighbouringStars = [aquarius.v15];
					break;
			}

			if ((previousStar == 1 && currentStar == 2) ||
				(previousStar == 2 && currentStar == 1))
				constellations[currentConstellation].line[0] = 1;

			else if ((previousStar == 2 && currentStar == 3) ||
				(previousStar == 3 && currentStar == 2))
				constellations[currentConstellation].line[1] = 1;

			else if ((previousStar == 3 && currentStar == 4) ||
				(previousStar == 4 && currentStar == 3))
				constellations[currentConstellation].line[2] = 1;

			else if ((previousStar == 4 && currentStar == 5) ||
				(previousStar == 5 && currentStar == 4))
				constellations[currentConstellation].line[3] = 1;

			else if ((previousStar == 4 && currentStar == 11) ||
				(previousStar == 11 && currentStar == 4))
				constellations[currentConstellation].line[4] = 1;

			else if ((previousStar == 5 && currentStar == 6) ||
				(previousStar == 6 && currentStar == 5))
				constellations[currentConstellation].line[5] = 1;

			else if ((previousStar == 5 && currentStar == 7) ||
				(previousStar == 7 && currentStar == 5))
				constellations[currentConstellation].line[6] = 1;

			else if ((previousStar == 7 && currentStar == 8) ||
				(previousStar == 8 && currentStar == 7))
				constellations[currentConstellation].line[7] = 1;

			else if ((previousStar == 8 && currentStar == 9) ||
				(previousStar == 9 && currentStar == 8))
				constellations[currentConstellation].line[8] = 1;

			else if ((previousStar == 9 && currentStar == 10) ||
				(previousStar == 10 && currentStar == 9))
				constellations[currentConstellation].line[9] = 1;

			else if ((previousStar == 11 && currentStar == 12) ||
				(previousStar == 12 && currentStar == 11))
				constellations[currentConstellation].line[10] = 1;

			else if ((previousStar == 12 && currentStar == 13) ||
				(previousStar == 13 && currentStar == 12))
				constellations[currentConstellation].line[11] = 1;

			else if ((previousStar == 13 && currentStar == 14) ||
				(previousStar == 14 && currentStar == 13))
				constellations[currentConstellation].line[12] = 1;

			else if ((previousStar == 14 && currentStar == 15) ||
				(previousStar == 15 && currentStar == 14))
				constellations[currentConstellation].line[13] = 1;

			else if ((previousStar == 15 && currentStar == 16) ||
				(previousStar == 16 && currentStar == 15))
				constellations[currentConstellation].line[14] = 1;

			break;

		case 12: // Pisces
			switch (currentStar) {

				case 1:
					neighbouringStars = [pisces.v2, pisces.v5];
					break;

				case 2:
					neighbouringStars = [pisces.v1, pisces.v3];
					break;

				case 3:
					neighbouringStars = [pisces.v2, pisces.v4];
					break;

				case 4:
					neighbouringStars = [pisces.v3, pisces.v5, pisces.v6];
					break;

				case 5:
					neighbouringStars = [pisces.v1, pisces.v4];
					break;

				case 6:
					neighbouringStars = [pisces.v4, pisces.v7];
					break;

				case 7:
					neighbouringStars = [pisces.v6, pisces.v8];
					break;

				case 8:
					neighbouringStars = [pisces.v7, pisces.v9];
					break;

				case 9:
					neighbouringStars = [pisces.v8, pisces.v10];
					break;

				case 10:
					neighbouringStars = [pisces.v9, pisces.v11];
					break;

				case 11:
					neighbouringStars = [pisces.v10, pisces.v12];
					break;

				case 12:
					neighbouringStars = [pisces.v11, pisces.v13];
					break;

				case 13:
					neighbouringStars = [pisces.v12, pisces.v14];
					break;

				case 14:
					neighbouringStars = [pisces.v13, pisces.v15];
					break;

				case 15:
					neighbouringStars = [pisces.v14, pisces.v16];
					break;

				case 16:
					neighbouringStars = [pisces.v15, pisces.v17, pisces.v18];
					break;

				case 17:
					neighbouringStars = [pisces.v16, pisces.v18];
					break;

				case 18:
					neighbouringStars = [pisces.v16, pisces.v17];
					break;
			}

			if ((previousStar == 1 && currentStar == 2) ||
				(previousStar == 2 && currentStar == 1))
				constellations[currentConstellation].line[0] = 1;

			else if ((previousStar == 1 && currentStar == 5) ||
				(previousStar == 5 && currentStar == 1))
				constellations[currentConstellation].line[1] = 1;

			else if ((previousStar == 2 && currentStar == 3) ||
				(previousStar == 3 && currentStar == 2))
				constellations[currentConstellation].line[2] = 1;

			else if ((previousStar == 3 && currentStar == 4) ||
				(previousStar == 4 && currentStar == 3))
				constellations[currentConstellation].line[3] = 1;

			else if ((previousStar == 4 && currentStar == 5) ||
				(previousStar == 5 && currentStar == 4))
				constellations[currentConstellation].line[4] = 1;

			else if ((previousStar == 4 && currentStar == 6) ||
				(previousStar == 6 && currentStar == 4))
				constellations[currentConstellation].line[5] = 1;

			else if ((previousStar == 6 && currentStar == 7) ||
				(previousStar == 7 && currentStar == 6))
				constellations[currentConstellation].line[6] = 1;

			else if ((previousStar == 7 && currentStar == 8) ||
				(previousStar == 8 && currentStar == 7))
				constellations[currentConstellation].line[7] = 1;

			else if ((previousStar == 8 && currentStar == 9) ||
				(previousStar == 9 && currentStar == 8))
				constellations[currentConstellation].line[8] = 1;

			else if ((previousStar == 9 && currentStar == 10) ||
				(previousStar == 10 && currentStar == 9))
				constellations[currentConstellation].line[9] = 1;

			else if ((previousStar == 10 && currentStar == 11) ||
				(previousStar == 11 && currentStar == 10))
				constellations[currentConstellation].line[10] = 1;

			else if ((previousStar == 11 && currentStar == 12) ||
				(previousStar == 12 && currentStar == 11))
				constellations[currentConstellation].line[11] = 1;

			else if ((previousStar == 12 && currentStar == 13) ||
				(previousStar == 13 && currentStar == 12))
				constellations[currentConstellation].line[12] = 1;

			else if ((previousStar == 13 && currentStar == 14) ||
				(previousStar == 14 && currentStar == 13))
				constellations[currentConstellation].line[13] = 1;

			else if ((previousStar == 14 && currentStar == 15) ||
				(previousStar == 15 && currentStar == 14))
				constellations[currentConstellation].line[14] = 1;

			else if ((previousStar == 15 && currentStar == 16) ||
				(previousStar == 16 && currentStar == 15))
				constellations[currentConstellation].line[15] = 1;

			else if ((previousStar == 16 && currentStar == 17) ||
				(previousStar == 17 && currentStar == 16))
				constellations[currentConstellation].line[16] = 1;

			else if ((previousStar == 16 && currentStar == 18) ||
				(previousStar == 18 && currentStar == 16))
				constellations[currentConstellation].line[17] = 1;

			else if ((previousStar == 17 && currentStar == 18) ||
				(previousStar == 18 && currentStar == 17))
				constellations[currentConstellation].line[18] = 1;
			break;
	}

	// allLinesDrawn = method which returns true if all lines have been drawn
	const allLinesDrawn = (value) => value == 1;

	if (constellations[currentConstellation].line.every(allLinesDrawn)) {
		constellations[currentConstellation].completed = 1;
		oneConstDone = 1;
		addConstellationToLibrary(currentConstellation);
		soundEffects(4); // "completed constellation" sound
	}

	if (constellations[currentConstellation].completed == 1) {
		isDrawing = false;
	}
}