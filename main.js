"use strict";
exports.__esModule = true;
var Composite_pattern_1 = require("./Composite-pattern");
var strategy = new Composite_pattern_1.Files('Strategy Pattern', 'ppt');
var oobserver = new Composite_pattern_1.Files('Observer Pattern', 'pdf');
var midSyllabus = new Composite_pattern_1.Files('MidSyllabus', 'doc');
var coomposite = new Composite_pattern_1.Files('Component Pattern', 'ppt');
var finalSyllabus = new Composite_pattern_1.Files('FinalSyllabus', 'doc');
var assignment1 = new Composite_pattern_1.Files('Assignment1', 'pdf');
var assignment2 = new Composite_pattern_1.Files('Assignment2', 'pdf');
var readMe = new Composite_pattern_1.Files('readMe', 'doc');
var midExam = new Composite_pattern_1.Folders('Mid Exam', 'folder');
var finalExam = new Composite_pattern_1.Folders('Final Exam', 'folder');
var lectures = new Composite_pattern_1.Folders('Lectures', 'folder');
var assignmets = new Composite_pattern_1.Folders('Assignments', 'folder');
var dp = new Composite_pattern_1.Folders('Design Pattern', 'folder');
midExam.addItem(strategy);
midExam.addItem(oobserver);
console.log(midExam.singleClick());
console.log(midExam.doubleClick());
midExam.addItem(midSyllabus);
finalExam.addItem(coomposite);
finalExam.addItem(finalSyllabus);
lectures.addItem(midExam);
lectures.addItem(finalExam);
assignmets.addItem(assignment1);
assignmets.addItem(assignment2);
dp.addItem(lectures);
dp.addItem(readMe);
dp.addItem(assignmets);
console.log(dp.singleClick());
console.log(dp.doubleClick());
dp.remove(readMe);
console.log(dp.doubleClick());
